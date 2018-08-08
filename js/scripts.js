$(document).ready(function() {
  $("#letter").submit(function() {
    var inputName = $("input#name").val();
    var inputLast = $("input#last").val();

    $(".name").append(inputName);
    $(".last").append(inputLast);

    $("#story").show();

    event.preventDefault();
  });
});
