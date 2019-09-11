$(document).ready(function () {

  /* press the red button change blue and green boxes to red */
  $("#redBoxButton").click(() => {
    $("#redBox").css("background", "red");
    $("#blueBox").css("background", "red");
    $("#greenBox").css("background", "red");

  });

  /* press the green button change red and blue boxes to green */
  $("#greenBoxButton").click(() => {
    $("#redBox").css("background", "green");
    $("#blueBox").css("background", "green");
    $("#greenBox").css("background", "green");

  });

  /* press the blue button change red and green boxes to blue */
  $("#blueBoxButton").click(() => {
    $("#redBox").css("background", "blue");
    $("#blueBox").css("background", "blue");
    $("#greenBox").css("background", "blue");

  });

  /* press the white button reset to their original color */
  $("#whiteBoxButton").click(() => {
    $("#redBox").css("background", "red");
    $("#blueBox").css("background", "blue");
    $("#greenBox").css("background", "green");

  });

});