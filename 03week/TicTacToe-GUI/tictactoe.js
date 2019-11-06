
var players = [];
var markers = ["X", "O"];
players[0] = "Player One";
players[1] = "Player Two";
var whoseTurn = 0;
var scores = [0, 0];
var winValues = [7, 56, 73, 84, 146, 273, 292, 448];
var gameOver = false;

//check for wins
function winCheck() {
  for (var i = 0; i < winValues.length; i++) {
    if ((scores[whoseTurn] & winValues[i]) == winValues[i]) {
      document.getElementById("title").innerText = players[whoseTurn] + "'s Win!";
      gameOver = true;
    }
  }
  if (((scores[0] + scores[1]) == 511))
  {
document.getElementById("title").innerText = "Cat wins!"
gaveOver =true;
  }
}
//Draw Board

function play(clickedDiv, divValue) {
  // if (clickedDiv.innerHTML == "&nbsp;")
  if (!gameOver) {
    scores[whoseTurn] += divValue;
    clickedDiv.onclick = "";
    clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
    winCheck();
    if (!gameOver) { toggleplayer(); }
  }
}

function toggleplayer() {
  if (whoseTurn == 0) whoseTurn = 1;
  else whoseTurn = 0;

  document.getElementById("title").innerText =
    players[whoseTurn] + "'s Turn";
}
//Track Player

//Figure out win

//Reset Board

//Reset Game

//Score Board
