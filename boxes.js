$(document).ready(function () {

  $('button').on('click', function(e) {
    e.preventDefault();

    // button clicked
    var buttonClicked = $(this).attr('id');

    // update color only when a red, green or blue button is clicked, otherwise reset to default
    if(buttonClicked !== 'reset') {
      // add inline style so it overrides the class
      $(this).parents().find('.change').css('background-color', buttonClicked);
    } else {
      // remove all inline styles so class determines the color shown
      $('section').removeAttr('style');
    }
  });

});
