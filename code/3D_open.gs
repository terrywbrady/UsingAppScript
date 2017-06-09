function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Test Function", "test")
    .addItem("Show Sidebar", "showSidebar")
    .addToUi();
}
