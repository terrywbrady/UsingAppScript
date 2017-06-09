function getApiKey() {
  //Request a booksapi key from Google
  //Set a script property using File->Project Properties->Script Properties
  var key = PropertiesService.getScriptProperties().getProperty("booksapi");
  //Logger.log(key);
  return key == undefined ? "" : "&key="+key;
}
