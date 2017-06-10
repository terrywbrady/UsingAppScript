function showSidebarTemplate() {
  var t = HtmlService.createTemplateFromFile("Template.html");
  t.isbn = "0596517742";
  t.title = isbnLookup(t.isbn);
  var html = t.evaluate();
  SpreadsheetApp.getUi().showSidebar(html);
}