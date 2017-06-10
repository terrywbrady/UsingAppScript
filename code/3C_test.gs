function test() {
  var isbn = "0764506331";
  var title = isbnLookup(isbn)
  var msg = "The title for ISBN " + isbn + " is " + title;
  Logger.log(msg);
  SpreadsheetApp.getUi().alert(msg);
}
