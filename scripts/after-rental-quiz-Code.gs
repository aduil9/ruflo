/**
 * Europcar After Rental 101 Quiz — Web App
 *
 * SETUP:
 * 1. Create a new Google Apps Script project at script.google.com
 * 2. Paste this into Code.gs
 * 3. Create a new HTML file: File > New > HTML file > name it "Quiz"
 * 4. Paste the Quiz.html code into that file
 * 5. Click Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (or Anyone within your org)
 * 6. Click Deploy and copy the web app URL
 * 7. First submission auto-creates the "Quiz Responses" sheet
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Quiz')
    .setTitle('Europcar After Rental 101 Quiz')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitQuiz(data) {
  var ss = getOrCreateSheet_();
  var sheet = ss.getSheetByName('Quiz Responses');

  var row = [
    new Date(),
    data.agentName,
    data.agentEmail,
    data.score,
    data.total,
    Math.round((data.score / data.total) * 100) + '%'
  ];

  // Add each individual answer
  for (var i = 0; i < data.answers.length; i++) {
    row.push(data.answers[i].selected);
    row.push(data.answers[i].correct ? 'YES' : 'NO');
  }

  sheet.appendRow(row);

  return { success: true, score: data.score, total: data.total };
}

function getOrCreateSheet_() {
  var files = DriveApp.getFilesByName('Europcar After Rental 101 — Quiz Responses');
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }

  var ss = SpreadsheetApp.create('Europcar After Rental 101 — Quiz Responses');
  var sheet = ss.getActiveSheet();
  sheet.setName('Quiz Responses');

  var headers = [
    'Timestamp', 'Agent Name', 'Agent Email', 'Score', 'Total Questions', 'Percentage',
    'Q1 Answer', 'Q1 Correct',
    'Q2 Answer', 'Q2 Correct',
    'Q3 Answer', 'Q3 Correct',
    'Q4 Answer', 'Q4 Correct',
    'Q5 Answer', 'Q5 Correct',
    'Q6 Answer', 'Q6 Correct',
    'Q7 Answer', 'Q7 Correct',
    'Q8 Answer', 'Q8 Correct',
    'Q9 Answer', 'Q9 Correct',
    'Q10 Answer', 'Q10 Correct',
    'Q11 Answer', 'Q11 Correct',
    'Q12 Answer', 'Q12 Correct',
    'Q13 Answer', 'Q13 Correct',
    'Q14 Answer', 'Q14 Correct',
    'Q15 Answer', 'Q15 Correct'
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#003366')
    .setFontColor('#ffffff');
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, 6, 130);

  return ss;
}
