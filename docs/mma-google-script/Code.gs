function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('MMA App — Agent Reference Guide')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
