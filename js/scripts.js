// Business Logic for Dice Game
function Player(roll, temp, total) {
  this.roll = 0,
  this.temp = 0,
  this.total = 0,
  this.turn = ""
}

function RollDice() {
  return Math.floor(Math.random()*6)+1;
}

Player.prototype.Roll = function(Roll) {
  if (Roll > 1 && Roll <= 6) {
    this.roll = Roll;
  }
  else if (Roll = 1) {
    this.roll = 0;
    // this.turn = "it's not your turn!"
  }
  return this.roll;
}

Player.prototype.Temp = function() {
  if (this.roll > 1 && this.roll <= 6) {
    this.temp += this.roll;
  }
  else if (this.roll = 1) {
    this.temp = 0;
  }
}

Player.prototype.Hold = function() {
  this.total += this.temp;
  this.roll = 0;
  this.temp = 0;
}

Player.prototype.NewGame = function() {
  this.total = 0;
  this.temp = 0;
  this.turn = 0;
}

Player.prototype.CheckForHundred = function(){
  if(this.total >= 100){
    alert("This Player is the winner");
  }
}

Player.prototype.SwitchTo = function() {
  this.turn = "it's your turn";
}

Player.prototype.SwitchOff = function() {
  this.turn = "it's NOT your turn";
}


var Player1 = new Player;
var Player2 = new Player;


$(document).ready(function() {

  $("#PlayerOneRoll").click(function(event) {
    Player1.Roll(RollDice());
    $("#diceRoll").html("<img src=img/" + Player1.Roll(RollDice()) + ".png>");
    Player1.Temp();
    $("#currentRollOne").text(Player1.roll);
    $("#turnTotalOne").text(Player1.temp);
    // $("#turnOne").text(Player1.turn);

 });

  $("#PlayerOneHold").click(function(event) {
    Player1.Hold();
      // alert("It's Now Player2's Turn");
    Player1.SwitchOff();
    $("#turnOne").text(Player1.turn);
    Player2.SwitchTo();
    $("#turnTwo").text(Player2.turn);
    $("#totalScoreOne").text(Player1.total);
    Player1.CheckForHundred();
     $("#playerOneScore").text(Player1.total);

  });



  $("#PlayerTwoRoll").click(function(event) {
    Player2.Roll(RollDice());
    $("#diceRoll").html("<img src=img/" + Player2.Roll(RollDice()) + ".png>");
    Player2.Temp();
    $("#currentRollTwo").text(Player2.roll);
    $("#turnTotalTwo").text(Player2.temp);
  });

  $("#PlayerTwoHold").click(function(event) {
    Player2.Hold();
    // alert("It's Now Player1's Turn");
    $("#totalScoreTwo").text(Player2.total);
    Player2.CheckForHundred();
    $("#playerTwoScore").text(Player2.total);
    Player2.SwitchOff();
    $("#turnTwo").text(Player2.turn);
    Player1.SwitchTo();
    $("#turnOne").text(Player1.turn);
  });

  $("#newGame").click(function(event) {
    Player1.NewGame();
    Player2.NewGame();
    $("#currentRollOne").text("");
    $("#turnTotalOne").text("");
    $("#totalScoreOne").text("");

    $("#currentRollTwo").text("");
    $("#turnTotalTwo").text("");
    $("#totalScoreTwo").text("");

    $("#playerOneScore").text("");
    $("#playerTwoScore").text("");

  })


})
