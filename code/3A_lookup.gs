function isbnLookup(id) {
    return "Sample ISBN Lookup " + id;
}

function test() {
  var isbn = "9780141977263";
  var title = isbnLookup(isbn)
  var msg = "The title for ISBN " + isbn + " is " + title;
  Logger.log(msg);
}