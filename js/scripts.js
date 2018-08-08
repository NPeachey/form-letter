$(document).ready(function() {
  $("#letter").submit(function() {
    var inputName = $("input#name").val();
    var inputLast = $("input#last").val();

    $(".name").append(inputName.toUpperCase());
    $(".last").append(inputLast.toUpperCase());

    $("#story").show();

    event.preventDefault();
  });
});
