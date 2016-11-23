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
# Examples
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
