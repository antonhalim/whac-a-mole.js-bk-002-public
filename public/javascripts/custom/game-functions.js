function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var  prevNum = 0;
function selectMole() {
  var num = randomInt(1,10);
  if(num === prevNum){
    selectMole();
  }else{
    $("#mole-num-"+prevNum).hide("slide", { direction: "down" });
    prevNum = num;
    $("#mole-num-"+num).show("slide", { direction: "down" });
  }
}

// the function below is called on game.js and calls on your selectMole() function every second
function play() {
  setInterval(function() {
    selectMole();
  }, 100);
}
