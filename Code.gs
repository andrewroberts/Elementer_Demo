function onOpen() {
  SpreadsheetApp.getUi().createMenu('Elementer').addItem('Open', 'openDialog').addToUi()
}

function openDialog() {
  var html = HtmlService.createTemplateFromFile('Index').evaluate().setTitle('Settings')
  SpreadsheetApp.getUi().showSidebar(html)
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent()
}

// Server functions
// ----------------

function getMenu() {  
  return ['opt1', 'opt2', 'opt3']
}

function gotValue(value) {
  SpreadsheetApp.getActive().getSheets()[0].getRange('B1').setValue(value)
}
