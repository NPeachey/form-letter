$(document).ready(function() {
$("#letter").submit(function() {
var inputName = $("input#name").val();

$(".name").append(inputName);

$("#story").show();
event.preventDefault();
  });
});
