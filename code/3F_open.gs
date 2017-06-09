function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Test Function", "test")
    .addItem("Show Sidebar", "showSidebar")
    .addItem("Show Template", "showSidebarTemplate")
    .addItem("Show Sidebar With Client JS", "showSidebarWithClientJS")
    .addToUi();
}