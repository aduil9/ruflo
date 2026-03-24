function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('MMA App — Agent Reference Guide')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function createMMADocument() {
  var doc = DocumentApp.create('MMA App — Agent Reference Guide');
  var body = doc.getBody();

  var headingStyle = {};
  headingStyle[DocumentApp.Attribute.BOLD] = true;
  headingStyle[DocumentApp.Attribute.FONT_SIZE] = 16;

  var subheadingStyle = {};
  subheadingStyle[DocumentApp.Attribute.BOLD] = true;
  subheadingStyle[DocumentApp.Attribute.FONT_SIZE] = 13;

  // Title
  body.appendParagraph('MMA App — Agent Reference Guide')
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);

  body.appendParagraph('Effective Date: March 2026');
  body.appendParagraph('Introduced by: EMG (Europcar Mobility Group)');
  body.appendParagraph('Audience: Customer Service Agents');
  body.appendHorizontalRule();

  // Section 1
  body.appendParagraph('1. What is the MMA App?')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(
    'The Multi-Mobility Application (MMA) is Europcar\'s next-generation mobile app, ' +
    'developed in partnership with Volkswagen Financial Services (VWFS).'
  );
  body.appendParagraph('Key Objectives:').setBold(true);
  body.appendListItem('Replace the current Europcar app as the single booking platform');
  body.appendListItem('Offer a mobility marketplace, including:');
  body.appendListItem('Car-sharing (MILES)').setNestingLevel(1);
  body.appendListItem('E-bikes & e-scooters (Dott)').setNestingLevel(1);
  body.appendListItem('Additional mobility services planned from 2026 onwards').setNestingLevel(1);
  body.appendHorizontalRule();

  // Section 2
  body.appendParagraph('2. How to Identify an MMA Booking in Greenway')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('MMA reservations can be identified by the following fields:');

  var table2 = body.appendTable([
    ['Field', 'Value'],
    ['Direct Channel', 'GWY/BERC75/INTERNET/[date & time]/WEB'],
    ['IATA Code', '02095369 PPBA TO 4 VWFS']
  ]);
  styleTableHeader(table2);
  body.appendHorizontalRule();

  // Section 3
  body.appendParagraph('3. Handling Booking Modifications')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('If a customer requests a modification, follow one of the two options below:');

  body.appendParagraph('Option 1 — Customer Self-Service (Preferred)')
    .setHeading(DocumentApp.ParagraphHeading.HEADING3);
  body.appendListItem('Ask the customer to cancel the booking directly in the MMA app');
  body.appendListItem('Customer rebooks with the desired changes in the app');

  body.appendParagraph('Option 2 — Agent-Assisted Modification')
    .setHeading(DocumentApp.ParagraphHeading.HEADING3);
  body.appendListItem('Customer cancels the original booking in the app');
  body.appendListItem('Agent duplicates the booking in Greenway');
  body.appendListItem('Agent removes IATA information from the duplicated booking');
  body.appendListItem('Agent completes the modified booking');
  body.appendListItem('Customer receives an email confirmation');
  body.appendListItem('IMPORTANT: Customer must still cancel the original booking in the app')
    .setBold(true);
  body.appendHorizontalRule();

  // Section 4
  body.appendParagraph('4. Handling Cancellations')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);

  var table4 = body.appendTable([
    ['Rule', 'Detail'],
    ['How to cancel', 'Customer must cancel directly via the MMA app'],
    ['Cancellation fees', 'No cancellation fees apply'],
    ['No-show fees', 'No no-show fees apply'],
    ['Customer refuses to use app', 'Redirect to MMA Customer Support (see Section 6)']
  ]);
  styleTableHeader(table4);
  body.appendHorizontalRule();

  // Section 5
  body.appendParagraph('5. What CS Agents Should NOT Handle')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(
    'All MMA-related issues must be managed by the dedicated MMA Team. ' +
    'Do not attempt to resolve the following:'
  ).setBold(true);
  body.appendListItem('App usage issues');
  body.appendListItem('Reservation problems originating in the app');
  body.appendListItem('Account issues (login, registration, profile)');
  body.appendListItem('Error messages within the app');
  body.appendListItem('Prepaid payments made through the app');
  body.appendHorizontalRule();

  // Section 6
  body.appendParagraph('6. How to Forward MMA Issues')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);

  body.appendParagraph('Via the App (Customer Self-Service)')
    .setHeading(DocumentApp.ParagraphHeading.HEADING3);
  body.appendListItem('Customer navigates to Account > Support & Feedback');
  body.appendListItem('A Salesforce case is automatically created and assigned to MMA – App Support');

  body.appendParagraph('Via Phone (Agent Creates Case)')
    .setHeading(DocumentApp.ParagraphHeading.HEADING3);
  body.appendListItem('Create a Query Case in Salesforce');
  body.appendListItem('Add the customer account name');
  body.appendListItem('Change Case Owner to: MMA – App Support');
  body.appendListItem('Select the correct Case Origin: DE (Germany) / IE (Ireland) / ECI (Europcar International)');
  body.appendListItem('Set Case Reason 1 to: MMA – App Support');
  body.appendListItem('Case status is automatically set to In Progress');
  body.appendHorizontalRule();

  // Section 7
  body.appendParagraph('7. Important — Features Not Yet Available in MMA')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Agents should proactively communicate these limitations to customers:');

  var table7 = body.appendTable([
    ['Feature', 'Current Status', 'Workaround'],
    ['Loyalty Program', 'Not fully available in the app. Discounts included, but full loyalty benefits are not.', 'Direct customer to the Europcar website'],
    ['Bundle Offers', 'Not available yet', 'Standard pricing applies'],
    ['No-Show & Cancellation Fees', 'No fees applied', 'N/A']
  ]);
  styleTableHeader(table7);
  body.appendHorizontalRule();

  // Section 8
  body.appendParagraph('8. Quick Reference — Decision Flowchart')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);

  var flowchart = body.appendTable([
    ['Customer Scenario', 'Action'],
    ['Modification request', 'Option 1: Cancel & rebook in app (preferred)\nOption 2: Cancel in app → Agent duplicates in Greenway → Remove IATA → Complete booking'],
    ['Cancellation request', 'Direct customer to cancel in the MMA app (no fees apply)'],
    ['App / payment / account issue', 'DO NOT handle — Forward to MMA Team (Section 6)'],
    ['Loyalty / bundle question', 'Inform customer of limitations (Section 7)']
  ]);
  styleTableHeader(flowchart);
  body.appendHorizontalRule();

  // Section 9
  body.appendParagraph('9. Key Contacts')
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);

  var table9 = body.appendTable([
    ['Team', 'Responsibility', 'How to Reach'],
    ['MMA – App Support', 'All app-related issues', 'Salesforce case (Case Owner: MMA – App Support)'],
    ['EMG', 'Programme owner', 'Internal escalation']
  ]);
  styleTableHeader(table9);

  body.appendHorizontalRule();
  body.appendParagraph(
    'This document is a living guide. Screenshots and additional details will be added as they become available.'
  ).setItalic(true);

  doc.saveAndClose();
  return doc.getUrl();
}

function styleTableHeader(table) {
  var headerRow = table.getRow(0);
  for (var i = 0; i < headerRow.getNumCells(); i++) {
    headerRow.getCell(i).setBackgroundColor('#1a73e8');
    headerRow.getCell(i).editAsText()
      .setBold(true)
      .setForegroundColor('#ffffff');
  }
  // Alternate row shading
  for (var r = 1; r < table.getNumRows(); r++) {
    var bgColor = (r % 2 === 0) ? '#f8f9fa' : '#ffffff';
    for (var c = 0; c < table.getRow(r).getNumCells(); c++) {
      table.getRow(r).getCell(c).setBackgroundColor(bgColor);
    }
  }
}
