#HSLIDE
### Developing Library Applications with Google Apps Script

* Terry Brady, Georgetown University Library
* Craig Boman, University of Dayton Library

<a target="_blank" href="https://github.com/terrywbrady/UsingAppScript">https://github.com/terrywbrady/UsingAppScript</a>

#HSLIDE
### What is Google App Script?

Google App Script is a server-side implementation of JavaScript with access to several Google API's.

[Google Apps Script Documentation](https://developers.google.com/apps-script/)

#HSLIDE

### How can Google App Script be Used?
- Accessible as a standalone Google Script project on Google Drive
- Embedded in a Google Document, a Google Sheet, a Google Form, or a Google Site
- Packaged for the Chrome Store as an Add-On
  
#VSLIDE
#### Accessible as a standalone Google Script project on Google Drive
- Runnable on demand from the script editor
- Deployable as a web service
- Schedulable as a trigger (time-driven)

#VSLIDE
#### Embedded in a Google Document, a Google Sheet, a Google Form, or a Google Site
- Runnable from a custom menu item
- Triggered by a user event (on Edit/on Open action)
- Available as a spreadsheet formula
- All of the standalone script options are also available for embedded scripts

#VSLIDE
#### Packaged for the Chrome Store as an Add-On
- Offered for Sale to the Public
- Offered for Free to the Public
- Offered for Free to your Apps Domain
- Offered Privately by URL
  
#HSLIDE
### Why Use Google Apps Script?
- It is available where your users already are
  - No need to introduce another login
  - Sharable using existing Google Drive sharing options
  - Configuratable Authorization
  - User must authorize the permissions granted to the script
- Sometimes a Document or a Spreadsheet provides the correct level of complexity to solve a problem

#VSLIDE

Configuratable Authorization Options
- Script can run as the user running the script
- Script can run as the author of the script
- Script can be authorized to access personal Google Services (Mail, Calendar, Drive)


#HSLIDE
### Complete App Examples
- Example 1: Building a Web Service to Save to Google Drive
- Example 2: Extending Google Apps
- Example 3: Google Sheet with ISBN Lookup

#HSLIDE
##### Example 1: A Web Service to Upload a CSV to Google Sheets
- Auto-correct in Excel and Google Sheets is a frequent problem for librarians editing metadata
- CSV files can be corrupted when shared between users
- [Sample Script Project](https://script.google.com/a/georgetown.edu/d/13HcFhMle_oIBTfhuZEya_zQHAokJjgZEdqTEoOTeEfrpx5UpTmNUh_pB/edit?usp=drive_web)
- [Code on Github](https://github.com/terrywbrady/PlainTextCSV_GoogleAppsScript)
- [Sample Screen Shots](https://github.com/Georgetown-University-Libraries/PlainTextCSV_GoogleAppsScript/blob/master/README.md)

#VSLIDE
##### Example 1: Clone Project for Yourself
- [Sample Script Project](https://script.google.com/a/georgetown.edu/d/13HcFhMle_oIBTfhuZEya_zQHAokJjgZEdqTEoOTeEfrpx5UpTmNUh_pB/edit?usp=drive_web)
- Select "Make a Copy" to save an editable copy
- Click "Deploy as Webapp", set the run as parameters as appropriate to you
- Copy the current web app URL

#VSLIDE
##### Example 1: Run it Yourself
- Open the URL you saved
- Supply a CSV as a file or in the text box provided
- Upload CSV data
- Click the link to the generated spreadsheet

#HSLIDE
### Example 2: Weekly Scheduling with Google Sheets
- Volunteer assignment spreadsheet
- Volunteer coordinators had limited computer literacy
- [Sample Spreadsheet](https://docs.google.com/spreadsheets/d/1T_AnSoz893QY1IL9uH9L8mH220Wp6WE_Weaq3VkxOX4/edit#gid=0)
- [Code on GitHub](https://github.com/terrywbrady/OnlineRota_GoogleAppsScript)
- [Sample Screen Shots](https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/blob/master/README.md)

#VSLIDE
#####  Example 2: Clone/Configure for Yourself
- [Sample Spreadsheet](https://docs.google.com/spreadsheets/d/1T_AnSoz893QY1IL9uH9L8mH220Wp6WE_Weaq3VkxOX4/edit#gid=0)
- Select "Make a Copy" to save an editable copy
- Create a personal Google Site
  - Create a page within the site named "rotasearch"
  - Set a script property named "siteid" with a URL to your new site 

#VSLIDE
#####  Example 2: Run it for yourself
- Make an edit
- Send email
- Publish to Google Sites.  See the following [example](https://sites.google.com/a/georgetown.edu/examples/rotasearch)
- Create a trigger to call "sendRota" on a daily basis
  
#VSLIDE
##### Example 2: Sceenshot of Trigger Menu
![Screen Shot](screenshots/trigger1.jpg)

#VSLIDE
##### Example 2: Screenshot of Create Trigger
![Screen Shot](screenshots/trigger2.jpg)

#VSLIDE
##### Example 2: Create Trigger
![Screen Shot](screenshots/trigger3.jpg)


#HSLIDE
##### Example 3A: Create a Test Google Sheet with ISBN Lookup

We will extend this example to illustrate several featues of Google App Script.

 - 3A: Simulated Lookup
 - 3B: Lookup with Google Books
 - 3C: Add Google Sheet UI
 - 3D: Show HTML
 - 3E: Show Templated HTML
 - 3F: Show HTML with Client JS (Calling Server JS)

#HSLIDE
##### Example 3A: Creating a Test Google Sheet With Fake ISBN Lookup

Create a Google Sheet with the following data

|ISBN|Google Books Lookup|
|---|---|
|9780141977263||
|9780590328197||

#VSLIDE
##### Example 3A: Create a Script within the Sheet
- Tools -> Script Editor
- This will open up the App Script Cloud IDE

#VSLIDE
##### Example 3A: Add the following script code
```
function isbnLookup(id) {
    return "Sample ISBN Lookup " + id;
}

function test() {
  var title = isbnLookup("9780141977263")
  Logger.log(title);
}
```
#VSLIDE
##### Example 3A: Save the Script Project

Name the project something like "Test Project"

#VSLIDE
##### Example 3A: Test the script

From the "Select function" drop down, select "test" and click the "Run" or "Debug" button 
![screenshot](screenshots/screen1.jpg)

#VSLIDE
##### Example 3A: View Log Output

Click "View Logs" to confirm that the function ran.
![screenshot](screenshots/screen2.jpg)

#VSLIDE
##### Example 3A: Use the script as a Spreadsheet formula

Modify cell B2 to contain the following formula 

`=isbnLookup(A2)`

Copy cell B2 into cell B3 to create the following formula 

`=isbnLookup(A3)`

#VSLIDE
##### Example 3A: View Formula Output
![screenshot](screenshots/screen3.jpg)

#HSLIDE
##### Example 3B: Enhance the script with an external service call
- [Google Apps Script API Reference for UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)
- Update the isbnLookup function to use the [Google Books API](https://developers.google.com/books/docs/v1/using#web-applications) to lookup the isbn

#VSLIDE
##### Example 3B: Call Google Books Service 
```
function isbnLookup(id) {
  var url = "https://www.googleapis.com/books/v1/volumes?country=US&q=isbn:"+id;
  var options = {contentType : "application/json"};

  var resp = UrlFetchApp.fetch(url, options);
  if (resp == null || resp == "") return "N/A";

  var respdata = JSON.parse(resp.getContentText());
  if (respdata["items"].length == 0) return "Not found";

  return respdata["items"][0]["volumeInfo"]["title"];
}
```

#VSLIDE
##### Example 3B: Run the "test()" function again
- The first time you run this, you will need to authorize Google Apps to send data to an external URL
- Check the logs to verify that "Pride and Prejudice" was found

#VSLIDE
##### Example 3B: Reload the Spreadsheet 
![screenshot](screenshots/screen4.jpg)

#HSLIDE
##### Example 3C: Enhance the Sheets UI
- Add the following code to Add Menu to Google Sheets
```
function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Test Function", "test")
    .addToUi();
}
```

#VSLIDE
##### Example 3C: Reload to See the New Menu
![screenshot](screenshots/screen5.jpg)

#VSLIDE
##### Example 3C: Add UI Confirmation to the test() function

Modify the test() function to access the [Spreadsheet UI](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getUi())

```
function test() {
  var title = isbnLookup("9780141977263")
  Logger.log(title);
  SpreadsheetApp.getUi().alert(title);
}
```

#VSLIDE
##### Example 3C: Call the test function from the new menu
![screenshot](screenshots/screen6.jpg)


#HSLIDE
##### Example 3D: Adding Custom HTML to Your Script

In the script IDE, create a new html file named "Sidebar.html"

```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h2>Sample Code Here</h2>
  </body>
</html>
```

#VSLIDE
##### Example 3D: Create HTML
![screenshot](screenshots/screen7.jpg)

#VSLIDE
##### Example 3D: Add a menu option to load the sidebar

Create a function showSidebar()

```
function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile("Sidebar.html");
  SpreadsheetApp.getUi().showSidebar(html);
}
```

#VSLIDE
##### Example 3D: Add Menu Option

Add a call to showSidebar() to the Add On Menu

```
function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Test Function", "test")
    .addItem("Show Sidebar", "showSidebar")
    .addToUi();
}
```

#VSLIDE
##### Example 3D: Screenshot of Menu Option
![screenshot](screenshots/screen8.jpg)

#VSLIDE
##### Example 3D: Display Sidebar Output
![screenshot](screenshots/screen9.jpg)

#HSLIDE
##### Example 3E: Create HTML Template

A template can take an interpret values passed to the template.
- In the script IDE, create a new html file named "Template.html"

```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h2>Property goes here: <?=prop?></h2>
  </body>
</html>
```

#VSLIDE
##### Example 3E: Create Method to display data

Create a function getMessage() to display data

```
function getMessage() {
  return "HelloThere";
}
```

#VSLIDE
##### Example 3E: Display Template Function

Create a function showSidebarTemplate() which passes the output of getMessage() to the template

```
function showSidebarTemplate() {
  var t = HtmlService.createTemplateFromFile("Template.html");
  t.prop = getMessage();
  var html = t.evaluate();
  SpreadsheetApp.getUi().showSidebar(html);
}
```

#VSLIDE
##### Example 3E: Add Menu Option

Add a call to showSidebarTemplate() to the Add On Menu

```
function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Test Function", "test")
    .addItem("Show Sidebar", "showSidebar")
    .addItem("Show Template", "showSidebarTemplate")
    .addToUi();
}

```

#VSLIDE
##### Example 3E: Screenshot of Menu Option
![screenshot](screenshots/screen10.jpg)

#VSLIDE
##### Example 3E: Screenshot of Template Output
![screenshot](screenshots/screen11.jpg)

#HSLIDE
#####  Example 3F: HTML Template with Client JavaScript
Your client JavaScript can invoke server-side methods using *google.script.run*

- In the script IDE, create a new html file named "SidebarWithClientJS.html"

#VSLIDE
Complete HTML File
```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"><script>
    <script type="text/javascript">
      $(function(){
        google.script.run.withSuccessHandler(showValue).getMessage();
      });
      function showValue(data) {
        $("#message").text(data);
      }
    </script>
  </head>
  <body>
    <h2>Client Message</h2>
    <span id="message"></span>
  </body>
</html>
```

#VSLIDE
Client JavaScript
```
$(function(){
  google.script.run.withSuccessHandler(showValue).getMessage()
});

function showValue(data) {
  $("#message").text(data);
}
```

#VSLIDE
HTML Body (Will be Modified by JS)
```
<body>
  <h2>Client Message</h2>
  <span id="message"></span>
</body>
```

#VSLIDE
##### Example 3F: Method to Display Template
Create a function showSidebarWithClientJS()
```
function showSidebarWithClientJS() {
  var html = HtmlService.createHtmlOutputFromFile("SidebarWithClientJS.html");
  SpreadsheetApp.getUi().showSidebar(html);
}
```

#VSLIDE
##### Example 3F: Add Menu Item
Add a call to showSidebarWithClientJS() to the Add On Menu
```
function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Test Function", "test")
    .addItem("Show Sidebar", "showSidebar")
    .addItem("Show Template", "showSidebarTemplate")
    .addItem("Show Sidebar With Client JS", "showSidebarWithClientJS")
    .addToUi();
}
```

#VSLIDE
##### Example 3F: Screenshot of Menu Option
![screenshot](screenshots/screen12.jpg)

#VSLIDE
##### Example 3F: Screenshot of Template Call
Note that the client JavaScript made a call to getMessage()
![screenshot](screenshots/screen13.jpg)

#HSLIDE
##### Note About Trigger Restrictions
- When installing an onOpen() trigger or other special triggers some [restrictions](https://developers.google.com/apps-script/guides/triggers/) apply to what your script can do
- You may need to simplify the actions performed with a trigger and defer them to a user-driven action
- If you see unexpected behavior in your scripts, evaluate if one of these restrictions has applied

#HSLIDE
##### Useful Reference
- [Creating a Google Doc Add-On Example](https://developers.google.com/apps-script/quickstart/docs)
- [Templated HTML](https://developers.google.com/apps-script/guides/html/templates)
- [Calling Server Side Functions from Client JavaScript](https://developers.google.com/apps-script/guides/html/reference/run)

#HSLIDE
### Thank You!

Terry Brady

Georgetown University Library

http://www.github.com/terrywbrady/info

![](http://www.library.georgetown.edu/sites/default/files/library-logo.png)
