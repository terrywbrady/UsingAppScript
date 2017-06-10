function isbnLookup(id) {
  var url = "https://www.googleapis.com/books/v1/volumes?country=US&q=isbn:"+id+getApiKey();
  var options = {contentType : "application/json"};

  var resp = UrlFetchApp.fetch(url, options);
  if (resp == null || resp == "") return "N/A";

  var respdata = JSON.parse(resp.getContentText());
  if (respdata["items"] == undefined) return "Not found";
  if (respdata["items"].length == 0) return "Not found";

  var data = respdata["items"][0]["volumeInfo"];
  return (data["subtitle"] == undefined) ? 
    data["title"] : data["title"] + ": " + data["subtitle"];
}