$( document ).ready(function() {
  var score = parseInt($('#counter').text());


  // create your click handler here
  $('.mole').click(function(){
    score++;
    $('#counter').text(score);
  });


  // the below code calls on the play function found in game-functions.js
  // the play function calls on selectMole, then waits a second, then calls
  // on selectMole, then waits a second, you get the idea :)
  play();

});
