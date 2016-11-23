# What is Google App Script?
Google App Script is a server-side implementation of JavaScript with access to several Google API's.

[Google Apps Script Documentation](https://developers.google.com/apps-script/)

***

# How can Google App Script be Used?
- Accessible as a standalone Google Script project on Google Drive
  - Runnable on demand from the script editor
  - Deployable as a web service
  - Schedulable as a trigger (time-driven)
- Embedded in a Google Document, a Google Sheet, a Google Form, or a Google Site
  - Runnable from a custom menu item
  - Triggered by a user event (on Edit action)
  - Availabe as a spreadhseet formula
  - All of the standalone script options are also available for embedded scripts
- Packaged for the Chrome Store as an Add-On
  - Offered for Sale to the Public
  - Offered for Free to the Public
  - Offered for Free to your Apps Domain
  - Offered Privately by URL
  
***
  
# Why Use Google Apps Script?
- It is available where your users already are
  - No need to introduce another login
  - Sharable using existing Google Drive sharing options
  - Configuratable Authorization
    - Script can run as the user running the script
    - Script can run as the author of the script
    - Script can be authorized to access personal Google Services (Mail, Calendar, Drive)
  - User must authorize the permissions granted to the script
- Sometimes a Document or a Spreadsheet provides the correct level of complexity to solve a problem

***
# Complete App Examples
- Extending Google Apps
- Building a Web Service to Save to Google Drive
***
# Example 1: Weekly Scheduling with Google Sheets
- Volunteer assignment spreadsheet
- Volunteer coordinators had limited computer literacy
- [Sample Spreadsheet](https://docs.google.com/spreadsheets/d/1T_AnSoz893QY1IL9uH9L8mH220Wp6WE_Weaq3VkxOX4/edit#gid=0)
  - Make an edit
  - Send email
  - Publish to [Google Sites](https://sites.google.com/a/georgetown.edu/examples/rotasearch)
- [Code on GitHub](https://github.com/terrywbrady/OnlineRota_GoogleAppsScript)
- Try it yourself
  - Select "Make a Copy" to save an editable copy
  - Set up google sites if applicable
  - TBD: Make Google Sites more Accessible
  - Create a trigger to call "sendRota" on a daily basis
- [Sample Screen Shots](https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/blob/master/README.md)
  
***
# Example 2: A Web Service to Upload a CSV to Google Sheets
- Auto-correct in Excel and Google Sheets is a frequent problem for librarians editing metadata
- CSV files can be corrupted when shared between useers
- [Sample Script Project](https://script.google.com/a/georgetown.edu/d/13HcFhMle_oIBTfhuZEya_zQHAokJjgZEdqTEoOTeEfrpx5UpTmNUh_pB/edit?usp=drive_web)
- Try it yourself
  - Select "Make a Copy" to save an editable copy
  - Click "Deploy as Webapp", set the run as parameters as appropriate to you
  - Get the current web app URL
  - Run the Web App to upload a CSV file
- [Sample Screen Shots](https://github.com/Georgetown-University-Libraries/PlainTextCSV_GoogleAppsScript/blob/master/README.md)
  
***
# Creating a Test Google Sheet
- Create a new Google Sheet
- Enter the following Data

|ISBN|Google Books Lookup|
|---|---|
|9780141977263||
|9780590328197||

# Create a Script within the Sheet
- Tools -> Script Editor
- This will open up the App Script Cloud IDE
- Add the following script code
```
function isbnLookup(id) {
    return "Sample ISBN Lookup " + id;
}
function test() {
  var title = isbnLookup("9780141977263")
  Logger.log(title);
}
```
- Save the Script Project, name it "Test Project"

# Test the script
- From the "Select function" drop down, select "test" and click the "Run" or "Debug" button 
![screenshot](screenshots/screen1.jpg)
- Click "View Logs" to confirm that the function ran.
![screenshot](screenshots/screen2.jpg)

# Use the script as a Spreadsheet formula
- Modify cell B2 to contain the following formula `=isbnLookup(A2)`
- Copy cell B2 into cell B3 to create the following formula `=isbnLookup(A3)`
- Verify that the cell contents display the result of the function
![screenshot](screenshots/screen3.jpg)

# Enhance the script
- Update the isbnLookup function to use the [Google Books API](https://developers.google.com/books/docs/v1/using#web-applications) to lookup the isbn
```
function isbnLookup(id) {
  var resp = UrlFetchApp.fetch("https://www.googleapis.com/books/v1/volumes?country=US&q=isbn:"+id, {contentType : "application/json"});
  if (resp == null || resp == "") return "N/A";
  var respdata = JSON.parse(resp.getContentText());
  if (respdata["items"].length == 0) return "Not found";
  return respdata["items"][0]["volumeInfo"]["title"];
}
```
- Run the "test()" function again
  - The first time you run this, you will need to authorize Google Apps to send data to an external URL
- Check the logs to verify that "Pride and Prejudice" was found

# Reload the Spreadsheet
- The Google Books lookups should now be present
![screenshot](screenshots/screen4.jpg)
