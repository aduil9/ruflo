/**
 * Europcar After Rental 101 — Google Forms Quiz
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire script into Code.gs
 * 3. Run the function createQuiz()
 * 4. Authorize when prompted
 * 5. Check your Google Drive for the form "Europcar After Rental 101 Quiz"
 * 6. Responses will be stored automatically in a linked Google Sheet
 */

function createQuiz() {
  var form = FormApp.create('Europcar After Rental 101 Quiz');
  form.setIsQuiz(true);
  form.setDescription(
    'Test your knowledge of the Europcar After Rental CS Process Guide (CS001–CS036). ' +
    '15 multiple-choice questions. Each question is worth 1 point.'
  );
  form.setShuffleQuestions(false);
  form.setCollectEmail(true);

  // --- Question 1: Data Protection – SAR SLA ---
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. What is the SLA for a Subject Access Request (SAR) under CS001 Data Protection?');
  q1.setPoints(1);
  q1.setChoices([
    q1.createChoice('5 working days', false),
    q1.createChoice('14 days', false),
    q1.createChoice('30 days', true),
    q1.createChoice('60 days', false)
  ]);
  q1.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! SAR SLA is 30 days.').build());
  q1.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. The SAR SLA is 30 days as per CS001.').build());

  // --- Question 2: SAR – UK Routing ---
  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. In the UK, where should all Subject Access Requests be sent after being checked by a Team Leader?');
  q2.setPoints(1);
  q2.setChoices([
    q2.createChoice('uk.security@europcar.com', false),
    q2.createChoice('executive.relations@europcar.com', true),
    q2.createChoice('csdamage@europcar.com', false),
    q2.createChoice('outsourcesupport@europcar.com', false)
  ]);
  q2.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! UK SARs go to executive.relations@europcar.com.').build());
  q2.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. UK SARs must be sent to executive.relations@europcar.com.').build());

  // --- Question 3: Right of Erasure – Restrictions ---
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Which of the following is NOT a valid reason to refuse a Right of Erasure request?');
  q3.setPoints(1);
  q3.setChoices([
    q3.createChoice('Customer has outstanding balances', false),
    q3.createChoice('Customer is watchlisted', false),
    q3.createChoice('Customer has an ongoing investigation', false),
    q3.createChoice('Customer has not rented in over 12 months', true)
  ]);
  q3.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Inactivity alone is not a reason to refuse erasure. Outstanding balances, watchlist status, and ongoing investigations are valid reasons.').build());
  q3.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. The valid reasons to refuse are: outstanding balances, being watchlisted, or outstanding investigations.').build());

  // --- Question 4: Grace Period ---
  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. What is the standard grace period for a regular (non-Stars) customer returning a vehicle late?');
  q4.setPoints(1);
  q4.setChoices([
    q4.createChoice('15 minutes', false),
    q4.createChoice('29 minutes', true),
    q4.createChoice('1 hour', false),
    q4.createChoice('2 hours', false)
  ]);
  q4.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Standard grace period is 29 minutes. Stars members get 2 hours (UK only).').build());
  q4.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. The standard grace period is 29 minutes (CS006). Stars members get 2 hours for UK hires.').build());

  // --- Question 5: Greenway Reservation Status ---
  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. In Greenway, what does the reservation status code "NS" mean?');
  q5.setPoints(1);
  q5.setChoices([
    q5.createChoice('Not Sold', false),
    q5.createChoice('No Show', true),
    q5.createChoice('New Submission', false),
    q5.createChoice('Not Started', false)
  ]);
  q5.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! NS = No Show in Greenway reservation status codes.').build());
  q5.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. NS stands for No Show in Greenway.').build());

  // --- Question 6: Damage Charges – Riskappli ---
  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. When searching for damage claims in Riskappli, which number must you use to search?');
  q6.setPoints(1);
  q6.setChoices([
    q6.createChoice('Invoice number', false),
    q6.createChoice('Reservation number', false),
    q6.createChoice('Rental Agreement (RA) number', true),
    q6.createChoice('Driver ID number', false)
  ]);
  q6.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Riskappli must be searched using the Rental Agreement number, not the reservation or invoice number.').build());
  q6.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. You must search Riskappli by Rental Agreement (RA) number.').build());

  // --- Question 7: Fines – UK RFI ---
  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. For UK fines queries, which system should you use instead of sending an RFI to the station?');
  q7.setPoints(1);
  q7.setChoices([
    q7.createChoice('Connexus', false),
    q7.createChoice('SAFO', true),
    q7.createChoice('FileNet', false),
    q7.createChoice('KGS', false)
  ]);
  q7.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! For UK fines, never send an RFI — use SAFO for documents.').build());
  q7.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. CS007 states: Never send UK RFI for fines documents — use SAFO.').build());

  // --- Question 8: Refund Authorisation Limits ---
  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. According to CS017, what is the maximum refund amount a Station Manager can authorise?');
  q8.setPoints(1);
  q8.setChoices([
    q8.createChoice('£25', false),
    q8.createChoice('£50', true),
    q8.createChoice('£100', false),
    q8.createChoice('£150', false)
  ]);
  q8.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Station Managers can authorise up to £50. £51–£150 requires a Territory Manager.').build());
  q8.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. Station Manager limit is £50 or under. £51–£150 requires Territory Manager approval.').build());

  // --- Question 9: Gesture of Goodwill ---
  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. What is the maximum amount for a Gesture of Goodwill payment, and who must approve ALL goodwill gestures regardless of amount?');
  q9.setPoints(1);
  q9.setChoices([
    q9.createChoice('Max £50, approved by Team Leader', false),
    q9.createChoice('Max £25, approved by rachel.palmer@europcar.com', true),
    q9.createChoice('Max £25, approved by Station Manager', false),
    q9.createChoice('Max £100, approved by Territory Manager', false)
  ]);
  q9.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Max £25 goodwill and ALL gestures must be sent to rachel.palmer@europcar.com for approval.').build());
  q9.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. Gesture of Goodwill is max £25 and ALL must be sent to rachel.palmer@europcar.com for approval, even if previously approved by station.').build());

  // --- Question 10: Watchlisted Driver ---
  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. When a UK customer is watchlisted for a reason OTHER than "Fails to Pay", what should you do?');
  q10.setPoints(1);
  q10.setChoices([
    q10.createChoice('Discuss the reason with the customer and resolve', false),
    q10.createChoice('Refer them to Consumer Collections on 0871 3843474', false),
    q10.createChoice('Do NOT discuss the reason — refer them to uk.security@europcar.com', true),
    q10.createChoice('Escalate to Executive Relations', false)
  ]);
  q10.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! For any reason other than "Fails to Pay", do NOT discuss with the customer — refer them to uk.security@europcar.com.').build());
  q10.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. Only "Fails to Pay" can be discussed. Any other watchlist reason: do NOT discuss, refer to uk.security@europcar.com.').build());

  // --- Question 11: Vehicle Cleanliness ---
  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Within what timeframe must a customer report vehicle cleanliness issues and provide images/valet receipt to be eligible for a refund?');
  q11.setPoints(1);
  q11.setChoices([
    q11.createChoice('Within 12 hours of hire starting', false),
    q11.createChoice('Within 24 hours of hire starting', true),
    q11.createChoice('Within 48 hours of hire starting', false),
    q11.createChoice('Before the vehicle is returned', false)
  ]);
  q11.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Report, images, and valet receipt must all be within 24 hours of hire starting.').build());
  q11.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. CS016 states the report, images, and receipt must be within 24 hours of hire starting.').build());

  // --- Question 12: Prepaid Early Return ---
  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. If a customer returns a prepaid rental early, under what circumstance can unused days be refunded?');
  q12.setPoints(1);
  q12.setChoices([
    q12.createChoice('If the customer gives 24 hours notice', false),
    q12.createChoice('If the early return was due to a mechanical breakdown (not customer fault)', true),
    q12.createChoice('Unused days are always refunded for prepaid rentals', false),
    q12.createChoice('Unused days are never refunded under any circumstances', false)
  ]);
  q12.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! T&C says no refund for unused days, with the exception of early return due to mechanical/breakdown (not keys lost/damaged/locked in).').build());
  q12.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. Per CS006, the only exception is early return due to mechanical/breakdown (not keys lost/damaged/locked in).').build());

  // --- Question 13: Breakdown — Replacement Vehicle ---
  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. According to CS011, what must a customer do when their vehicle breaks down before a replacement can be considered?');
  q13.setPoints(1);
  q13.setChoices([
    q13.createChoice('Drive to the nearest Europcar station', false),
    q13.createChoice('Call the CS team directly', false),
    q13.createChoice('Remain with the vehicle until breakdown service (AA) arrives', true),
    q13.createChoice('Arrange their own tow and submit receipts', false)
  ]);
  q13.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Customer must remain with the vehicle until the breakdown service arrives. If they leave, they have not adhered to T&C.').build());
  q13.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. The customer must remain with the vehicle until breakdown service (AA) arrives — if they do not wait, T&C have not been adhered to.').build());

  // --- Question 14: RFI Escalation Process ---
  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. In the RFI escalation process (CS017), if a station does not respond within 2 working days, who do you escalate to next?');
  q14.setPoints(1);
  q14.setChoices([
    q14.createChoice('Regional Director', false),
    q14.createChoice('Operations Director (Kevin Rand)', false),
    q14.createChoice('Territory Manager (1 more working day to respond)', true),
    q14.createChoice('outsourcesupport@europcar.com', false)
  ]);
  q14.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! After station SLA expires (2 days), escalate to Territory Manager who has 1 more working day. If still no response, then to outsourcesupport@europcar.com.').build());
  q14.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. The escalation chain is: Station (2 days) → Territory Manager (1 day) → outsourcesupport@europcar.com.').build());

  // --- Question 15: Card Details Retention ---
  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. How long does Europcar hold credit card details after the last transaction, as per the Privacy Policy?');
  q15.setPoints(1);
  q15.setChoices([
    q15.createChoice('6 months', false),
    q15.createChoice('12 months', false),
    q15.createChoice('13 months', true),
    q15.createChoice('24 months', false)
  ]);
  q15.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! Card details are held for 13 months after last transaction (Privacy Policy, section 5).').build());
  q15.setFeedbackForIncorrect(FormApp.createFeedback().setText('Incorrect. Europcar holds card details for 13 months after the last transaction.').build());

  // Create a linked spreadsheet for responses
  form.setDestination(FormApp.DestinationType.SPREADSHEET, createResponseSheet_(form.getTitle()));

  Logger.log('Quiz created successfully!');
  Logger.log('Form URL (edit): ' + form.getEditUrl());
  Logger.log('Form URL (share with respondents): ' + form.getPublishedUrl());

  return {
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl()
  };
}

/**
 * Creates a Google Sheet to store quiz responses and returns its ID.
 */
function createResponseSheet_(title) {
  var ss = SpreadsheetApp.create(title + ' — Responses');
  var sheet = ss.getActiveSheet();
  sheet.setName('Quiz Responses');

  // Add a summary header
  sheet.getRange('A1').setValue('Responses are collected automatically by Google Forms.');
  sheet.getRange('A1').setFontWeight('bold');

  Logger.log('Response sheet created: ' + ss.getUrl());
  return ss.getId();
}

/**
 * Optional: Run this function to email quiz results summary to yourself.
 * Set up a time-based trigger to run daily/weekly.
 */
function emailQuizSummary() {
  var forms = FormApp.getActiveForm();
  if (!forms) {
    Logger.log('No active form found. Run this from the form-bound script or update the form ID below.');
    return;
  }

  var responses = forms.getResponses();
  var totalResponses = responses.length;
  var totalScore = 0;

  for (var i = 0; i < responses.length; i++) {
    var itemResponses = responses[i].getGradableItemResponses();
    var score = 0;
    for (var j = 0; j < itemResponses.length; j++) {
      score += itemResponses[j].getScore();
    }
    totalScore += score;
  }

  var avgScore = totalResponses > 0 ? (totalScore / totalResponses).toFixed(1) : 0;

  var body = 'Europcar After Rental 101 Quiz Summary\n\n' +
    'Total responses: ' + totalResponses + '\n' +
    'Average score: ' + avgScore + ' / 15\n' +
    'Average percentage: ' + (totalResponses > 0 ? ((avgScore / 15) * 100).toFixed(1) : 0) + '%';

  MailApp.sendEmail(Session.getActiveUser().getEmail(), 'Quiz Summary — After Rental 101', body);
  Logger.log('Summary email sent.');
}
