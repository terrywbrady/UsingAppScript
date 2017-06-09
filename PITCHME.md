---
### Building Simple Apps with Google Apps Script

Terry Brady

Georgetown University Library

<a target="_blank" href="https://github.com/terrywbrady/info">https://github.com/terrywbrady/info</a>

![](https://www.library.georgetown.edu/sites/default/files/library-logo.png)

---
### Training Overview
- What is Google Apps Script |
 - Running Sample Apps Script Examples |
- Coding Google Apps Script |
 - Building a Sample Application|
- Using Google Apps Script in the Library|
 - Brainstorming possible uses  |

---
### What is Google Apps Script?

Google Apps Script is a server-side implementation of JavaScript with access to several Google API's.

<a target="_blank" href="https://developers.google.com/apps-script/">Google Apps Script Documentation</a>

---

### How can Google Apps Script be Accessed?
- Google Script Project on Google Drive |
- Embedded in a Google Product |
  - Document
  - Sheet
  - Google Form
  - Google Site
- Packaged for the Chrome Store as an Add-On |
  
+++
#### Standalone Google Script Project
- Runnable on demand from the script editor
- Deploy-able as a web service
- Schedule-able as a trigger (time-driven)

+++
#### When embedded in a Google Document... 
- Runnable from a custom menu item 
- Invoke-able as a spreadsheet formula 
- Triggered by a user event 
 - onOpen()
 - onEdit()

+++
#### Packaged for the Chrome Store as an Add-On
- Offered to the Public
  - For Sale or For Free 
- Offered to your Google Apps Domain 
- Offered Privately by URL
  
---
### Why Use Google Apps Script?
- It is available where your users already are |
  - No need to introduce another login 
- Sometimes a Document or a Spreadsheet provides the correct level of complexity to solve a problem  |
- Can be authorized to access personal Google Services (Mail, Calendar, Drive) |

+++
### Sharing Google Apps Script?
- Sharable using existing Google Drive sharing options 
- User must authorize the specific functions that will be performed by the script 
- Configurable Authorization 
  - Run as the user running the script 
  - Run as the author of the script 

---
### App Examples
- App Example 1: Building a Web Service |
 - Saves Results to Google Drive
- App Example 2: Extending Google Sheets |
 - Publish from Sheets to Google Sites and Gmail
- Code Example 3: Embed Interactive HTML App |
 - Add an HTML Panel to Google Sheets
 - Add client-side JavaScript
 - Perform ISBN Lookup

---
##### Example 1: Web Service to Facilitate Metadata Collaboration
- Librarians often work with text strings that look like numbers or dates
 - Call numbers, Accession Numbers
- Consider the data on the next slide

+++?code=code/data.csv
@[](What will happen to this data when opened in Excel or Google Sheets?)
@[](What will happen to this data if shared with another user)
@[3](The date on this line will be converted to a standard date)
@[4](The leading zeros in the number will be lost)

+++
##### Example 1: A Web Service to Upload a CSV to Google Sheets
- Load data to CSV
- Disable auto-correct in all cells

+++
##### Example 1: Clone Project for Yourself
- <a target="_blank" href="https://script.google.com/d/13HcFhMle_oIBTfhuZEya_zQHAokJjgZEdqTEoOTeEfrpx5UpTmNUh_pB/edit?usp=sharing">Sample Script Project</a>
- Select "Make a Copy" to save an editable copy
- Click "Deploy as Webapp", set the run as parameters as appropriate to you
- Copy the current web app URL

+++
##### Example 1: Project Components
- **Code.gs**
 - **doGet()** Display upload page (Index.html)
 - **doPost()** 
   - Process CSV Upload, create Google Sheet
   - Display a link to the generated Sheet (Response.html)
- **Index.html**: CSV Upload Page
- **Response.html**: HTML Fragment to display link to uploaded Sheets

+++
##### Example 1: Run it Yourself
- Open the URL you saved - calls doGet()
- Supply a CSV as a file or in the text box provided
- Upload CSV data
- Click the link to the generated spreadsheet

+++?code=code/data.csv

+++
##### Example 1: References
- <a target="_blank" href="https://script.google.com/d/13HcFhMle_oIBTfhuZEya_zQHAokJjgZEdqTEoOTeEfrpx5UpTmNUh_pB/edit?usp=sharing">Sample Script Project</a>
- <a target="_blank" href="https://github.com/terrywbrady/PlainTextCSV_GoogleAppsScript">Code on Github</a>
- <a target="_blank" href="https://github.com/Georgetown-University-Libraries/PlainTextCSV_GoogleAppsScript/blob/master/README.md">Sample Screen Shots</a>

+++
##### Example 1: Demo
![Full Video](https://www.youtube.com/embed/5LgWoImNQhI)

---
### Example 2: Sample Application Integrated with Google Services
- Illustrates what an application can do with Google Services
- User edits a spreadsheet
 - Spreadsheet content is published by Gmail
 - Spreadsheet content is published to Google Sites

+++
### Example 2: Publish Weekly Volunteer Assignments from Google Sheets
- Developed for an org in which several folks had limited computer literacy
 - Publish assignment updates to Google Sites daily
 - Email upcoming assignments once a week (with a link to Google Sites)

+++
## Example 2: Sample Spreadsheet
- Dates in column headers (Row 1)
 - Code detects the next date to publish
- Times (on a specific day) are defined in Row 2
- Roles (to be assigned) are defined in column A

+++?image=https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/raw/master/screenshots/sheet1.jpg

+++
## Example 2: Edit an assignment

+++?image=https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/raw/master/screenshots/sheet2.jpg

+++
## Example 2: E-mail Future Assignments 
A date trigger is also set up to send e-mail weekly

+++?image=https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/raw/master/screenshots/sheet3.jpg

+++
## Example 2: Sample e-mail containing the changes
Note that the sample e-mail was sent in Nov 2016

+++?image=https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/raw/master/screenshots/email.jpg

+++
## Example 2: Publish Changes to Google Sites 
A date trigger is also set up to update Google Sites Daily

+++?image=https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/raw/master/screenshots/sheet4.jpg

+++
## Example 2: Sample Google Site Page containing the changes
Note that the sample page was updated in Nov 2016

+++?image=https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/raw/master/screenshots/sites.jpg

+++
#####  Example 2: Clone/Configure for Yourself
- <a target="_blank" href="https://docs.google.com/spreadsheets/d/1T_AnSoz893QY1IL9uH9L8mH220Wp6WE_Weaq3VkxOX4/edit#gid=0">Sample Spreadsheet</a>
- Select "Make a Copy" to save an editable copy
- Create a personal Google Site
  - Create a page within the site named "rotasearch"
  - Set a script property named "siteid" with a URL to your new site 

+++
#####  Example 2: Run it for yourself
- Make an edit
- Send email
- Optionally Publish to Google Sites.  
 - See the following <a target="_blank" href="https://sites.google.com/a/georgetown.edu/examples/rotasearch">Google Sites example</a>
 - This step will currently only work with "Classic" Google Sites
- Create a trigger to call "sendRota" on a daily basis
  
+++
##### Example 2: Configure Classic Google Sites for Publishing
- Per this <a target="_blank" href="https://developers.google.com/apps-script/reference/sites/sites-app">note</a>, Google App Script does not yet support the new version of Google Sites
- Get the URL to your classic Google Site such as https://sites.google.com/site/code4libdemo/
- In your Google Script, add this as a Script Property named "siteid"
- If you cannot create a classic Google Site, skip this step

+++
##### Example 2: Defining Your Site URL as a Script Property

+++?image=screenshots/scriptProp.jpg

+++
##### Example 2: Sceenshot of Trigger Menu
+++?image=screenshots/trigger1.jpg

+++
##### Example 2: Screenshot of Create Trigger
+++?image=screenshots/trigger2.jpg

+++
##### Example 2: Create Trigger to Publish Automatically
+++?image=screenshots/trigger3.jpg

+++
### Example 2: References
- <a target="_blank" href="https://docs.google.com/spreadsheets/d/1T_AnSoz893QY1IL9uH9L8mH220Wp6WE_Weaq3VkxOX4/edit#gid=0">Sample Spreadsheet</a>
- <a target="_blank" href="https://github.com/terrywbrady/OnlineRota_GoogleAppsScript">Code on GitHub</a>
- <a target="_blank" href="https://github.com/terrywbrady/OnlineRota_GoogleAppsScript/blob/master/README.md">Sample Screen Shots</a>

+++
##### Example 2: Create a Google Site
![Full Video](https://www.youtube.com/embed/JP7VnNHclmQ)

+++
##### Example 2: Publish from the Rota Spreadsheet
![Full Video](https://www.youtube.com/embed/0sl2idjLP6w)

---
##### Code Example 3: Add Interactive HTML App to Google Sheets

- Create an application in Google Sheets that looks up ISBN numbers and returns book titles


+++
##### Code Example 3: Add Interactive HTML App to Google Sheets
We will build the sample ISBN lookup app in 6 parts
 - 3A: Simulated ISBN Lookup |
 - 3B: Lookup ISBN with Google Books API |
 - 3C: Display Lookup Results with Google Sheets UI |
 - 3D: Display a static HTML panel |
 - 3E: Display a Templated HTML panel (with lookup results) |
 - 3F: Display an Interactive HTML panel (to lookup results) |

---
##### Example 3A: Creating a Test Google Sheet With Fake ISBN Lookup

Create a Google Sheet with the following data

|ISBN|Google Books Lookup|
|---|---|
|9780141977263||
|9780590328197||

+++
##### Example 3A: Create a Script within the Sheet
- Tools -> Script Editor
- This will open up the Apps Script Cloud IDE

+++
##### Example 3A: Add the following script code
|ISBN|Google Books Lookup|
|---|---|
|9780141977263||
|9780590328197||

+++?code=code/3A_lookup.gs&lang=js
@[](Sample Code - Save to "Code.gs")

+++
##### Example 3A: Save the Script Project

Name the project something like "Test Project"

+++
##### Example 3A: Test the script

From the "Select function" drop down, select "test" and click the "Run" or "Debug" button 
+++?image=screenshots/screen3a-1.jpg

+++
##### Example 3A: View Log Output

Click "View Logs" to confirm that the function ran.
+++?image=screenshots/screen3a-2.jpg

+++
##### Example 3A: View Log Output

+++?image=screenshots/screen3a-3.jpg

+++
##### Example 3A: Use the script as a Spreadsheet formula

Modify cell B2 to contain the following formula 
```
=isbnLookup(A2)
```
Copy cell B2 into cell B3 to create the following formula 
```
=isbnLookup(A3)
```

+++
##### Example 3A: View Formula Output
+++?image=screenshots/screen3a-4.jpg

+++
##### Example 3a: Simulate an ISBN Lookup in Google Sheets
![Full Video](https://www.youtube.com/embed/XUvjs1dFyJc)

---
##### Example 3B: Enhance the script with an external service call
- <a target="_blank" href="https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app">Google Apps Script API Reference for UrlFetchApp</a>
- Update the isbnLookup function to use the <a target="_blank" href="https://developers.google.com/books/docs/v1/using#web-applications">Google Books API</a> to lookup the isbn

+++
##### Example 3B: Call Google Books Service 

+++?code=code/3B_google_books.gs&lang=js
@[1](Replace function contents)
@[2-3](Prepare call to Google Books API)
@[5-6](Verify request response)
@[8-10](Verify return object)
@[12-16](Extract title OR title+subtitle)

+++
##### Example 3B: API Key for Google Books 
Without an API key, Google may throttle your requests

+++?code=code/3B_api_key.gs&lang=js
@[](If you encounter throttling, obtain your own Google Books API Key)

+++
##### Example 3B: Run the "test()" function again
- The first time you run this, you will need to authorize Google Apps to send data to an external URL

+++?image=screenshots/screen3b-1.jpg

+++
##### Example 3B: Reload the Spreadsheet 
+++?image=screenshots/screen3b-2.jpg

+++
##### Example 3b: ISBN Lookup with Google Books Api
![Full Video](https://www.youtube.com/embed/TEFrDibnzuw)

---
##### Example 3C: Call Your Function from the Sheets UI
- Add Menu to Google Sheets

+++?code=code/3C_open.gs&lang=js
@[](Add this function to you Code.gs file)

+++
##### Example 3C: Reload to See the New Menu
+++?image=screenshots/screen3c-1.jpg

+++
##### Example 3C: Add UI Confirmation to the test() function

Modify the test() function to access the <a target="_blank" href="https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getUi()">Spreadsheet UI</a>

+++?code=code/3C_test.gs&lang=js

+++
##### Example 3C: Call the test function from the new menu
+++?image=screenshots/screen3c-2.jpg

+++
##### Example 3c: Display User Feedback with the Google Sheets UI
![Full Video](https://www.youtube.com/embed/yLaFhsMWuKc)

---
##### Example 3D: Adding Custom HTML to Your Script

In the script IDE, create "Sidebar.html"

+++?code=code/3D_Sidebar.html&lang=html
@[](Save as "Sidebar.html")


+++
##### Example 3D: Create HTML
+++?image=screenshots/screen3d-1.jpg

+++
##### Example 3D: Add a menu option to load the sidebar

Create a function showSidebar()

+++?code=code/3D_sidebar.gs&lang=js
@[5](Add this line to your onOpen() function)

+++
##### Example 3D: Add Menu Option

Add showSidebar() to the Add On Menu

+++?code=code/3D_open.gs&lang=js


+++
##### Example 3D: Screenshot of Menu Option
+++?image=screenshots/screen3d-2.jpg

+++
##### Example 3D: Display Sidebar Output
+++?image=screenshots/screen3d-3.jpg

+++
##### Example 3d: Display an HTML Panel in Google Sheets
![Full Video](https://www.youtube.com/embed/waBVIvDQ5Ww)

---
##### Example 3E: Create HTML Template

A template can take an interpret values passed to the template.
- In the script IDE, create "Template.html"

+++?code=code/3E_Template.html&lang=html

+++
##### Example 3E: Display Template Function

Create a function showSidebarTemplate() which passes data to a template

+++?code=code/3E_template.gs&lang=js

+++
##### Example 3E: Add Menu Option

Add a call to showSidebarTemplate() to the Add On Menu

+++?code=code/3E_open.gs&lang=js
@[6](Add this line to your onOpen() function)

+++
##### Example 3E: Screenshot of Menu Option
+++?image=screenshots/screen3e-1.jpg

+++
##### Example 3E: Screenshot of Template Output
+++?image=screenshots/screen3e-2.jpg

+++
##### Example 3e: Create an HTML Panel from a Template
![Full Video](https://www.youtube.com/embed/3pjwjmGgPcQ)

---
#####  Example 3F: HTML Template with Client JavaScript
Your client JavaScript can invoke server-side methods using *google.script.run*

- In the script IDE, create a new html file named "SidebarWithClientJS.html"

+++?code=code/3F_SidebarWithClientJS.html&lang=html
@[](Save file as "SidebarWithClientJS.html")
@[5](Include jQuery)
@[19-26](HTML Body -Will be Modified by JS)
@[7-16](Client JS)
@[10](jQuery Ready $ function is called on page load)
@[11](**onBlur** event added to ISBN)
@[11](User enters a value into ISBN)
@[11](**onBlu**r is called)
@[12](BOOKTITLE is cleared)
@[14](ISBN passed to **isbnLookup**)
@[13](**isbnLookup** is a server-side Google Apps function)
@[13](If successful, **showValue** will be invoked)
@[7-9](**showValue** function)
@[8](BOOKTITLE is updated with the title)

+++
##### Example 3F: Method to Display Template
Create a function showSidebarWithClientJS()

+++?code=code/3F_showSidebar.gs&lang=js
@[](Add this function to "Code.gs")

+++
##### Example 3F: Add Menu Item
Add a call to showSidebarWithClientJS() to the Add On Menu

+++?code=code/3F_open.gs&lang=js
@[7](Add this line to your onOpen() function)

+++
##### Example 3F: Screenshot of Menu Option
+++?image=screenshots/screen3f-1.jpg

+++
##### Example 3F: Display HTML Page
An onBlur event is bound to the ISBN field.
+++?image=screenshots/screen3f-2.jpg

+++
##### Example 3F: Invoke Server JS from Client JS
The title field is updated after entering an ISBN.
+++?image=screenshots/screen3f-3.jpg

+++
##### Example 3f: Add Client Side JavaScript to an HTML Panel
![Full Video](https://www.youtube.com/embed/JehP77M3WY4)

---
##### Note About Trigger Restrictions
- When installing an onOpen() trigger or other special triggers some <a target="_blank" href="https://developers.google.com/apps-script/guides/triggers/">restrictions</a> apply to what your script can do
- You may need to simplify the actions performed with a trigger and defer them to a user-driven action
- If you see unexpected behavior in your scripts, evaluate if one of these restrictions has applied

---
##### Useful Reference
- <a target="_blank" href="https://developers.google.com/apps-script/quickstart/docs">Creating a Google Doc Add-On Example</a>
- <a target="_blank" href="https://developers.google.com/apps-script/guides/html/templates">Templated HTML</a>
- <a target="_blank" href="https://developers.google.com/apps-script/guides/html/reference/run">Calling Server Side Functions from Client JavaScript</a>

---
### Thank You!

Terry Brady

Georgetown University Library

<a target="_blank" href="http://www.github.com/terrywbrady/info">http://www.github.com/terrywbrady/info</a>

![](https://www.library.georgetown.edu/sites/default/files/library-logo.png)
