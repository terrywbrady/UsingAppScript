function showValue(data) {
  $("#booktitle").val(data);
}
$(function(){
  $("#isbn").on("blur", function(){
    $("#booktitle").val("");
    google.script.run.withSuccessHandler(showValue)
      .isbnLookup($("#isbn").val());
  });
});