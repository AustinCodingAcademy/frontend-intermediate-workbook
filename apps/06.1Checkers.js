"use strict";

var assert = require("assert");
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Check to see what color
  this.symbol = (color === "white") ? String.fromCharCode(0x125CB) : String.fromCharCode(0x125CF);
}

function Board() {
  // var declaration
  var whitePositions;
  var blackPositions;
  var whiteRow;
  var whiteColumn;
  var blackRow;
  var blackColumn;

  this.grid = [];

  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (var row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (var column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    var string = "  0 1 2 3 4 5 6 7\n";
    for (var row = 0; row < 8; row++) {
      // we start with our row number in our array
      var rowOfCheckers = [row];
      // a loop within a loop
      for (var column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(" ");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(" ");
      // add a "new line"
      string += "\n";
    }
    console.log(string);
  };

  this.checkers = [];
  this.createCheckers = function (checker) {

    whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7], [1, 0], [1, 2], [1, 4], [1, 6], [2, 1], [2, 3], [2, 5], [2, 7]];
    blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6], [6, 1], [6, 3], [6, 5], [6, 7], [7, 0], [7, 2], [7, 4], [7, 6]];

    for (i = 0; i < whitePositions.length; i++) {
      whiteRow = whitePositions[i][0];
      whiteColumn = whitePositions[i][1];

      this.grid[whiteRow][whiteColumn] = new Checker("white");
      this.checkers.push(this.grid[whiteRow][whiteColumn]);
    }

    for (i = 0; i < blackPositions.length; i++) {
      blackRow = blackPositions[i][0];
      blackColumn = blackPositions[i][1];

      this.grid[blackRow][blackColumn] = new Checker("black");
      this.checkers.push(this.grid[blackRow][blackColumn]);
    }
  };

  this.selectChecker = function(row, column) {
    // return the selected checker
    return this.grid[row][column];
  };

  this.killChecker = function (position) {
    
    console.log("position", position);

    var movedChecker = this.selectChecker(position[0],position[1]);
    var killedChecker = this.checkers.indexOf(movedChecker);

    console.log("movedChecker", movedChecker);
    console.log("killedChecker", killedChecker);

    console.log('killsplice', this.checkers.splice(killedChecker, 1));
    console.log('grid position', this.grid[position[0]][position[1]] = null);
    //this.selectChecker(position.splice())
    /*var rowPosition = parseInt(position[0]);
    var colPosition = parseInt(position[1]);
    
    this.grid[rowPosition][colPosition] = null;
    this.checkers.pop();
    console.log("position", position);*/
    // slice string from row - position and then push back to the array
  };
}

function Game() {

  this.board = new Board();
  this.checker = new Checker();

  this.moveChecker = function(start, end) {

    var startRow = start.split("")[0];
    var startColumn = start.split("")[1];
    var endRow = end.split("")[0];
    var endColumn = end.split("")[1];
    var boardGrid = this.board.grid;

    /*console.log("startRow", startRow);
    console.log("startColumn", startColumn);
    console.log("endRow", endRow);
    console.log("endColumn", endColumn);*/

    var checker = this.board.selectChecker(startRow, startColumn);

    /*console.log("checker", checker);*/

    boardGrid[startRow][startColumn] = null;
    boardGrid[endRow][endColumn] = checker;

    var moveDistance = Math.abs(startRow - endRow);
   /* console.log("moveDistance", moveDistance);*/

    if (moveDistance === 2){

        var killPositionX = (startRow + endRow) / 2;
        var killPositionY = (startColumn + endColumn) / 2;
        var killPosition = killPositionX + "" + killPositionY;
        console.log("killPositionX", killPositionX);
        console.log("killPositionY", killPositionY);
        console.log("killPosition", killPosition);

        var killedChecker = this.board.killChecker(killPosition);
        console.log("killedCheckerGame32", killedChecker)
        killedChecker = null;
    }

  };

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
  };
}

function getPrompt() {
  game.board.viewGrid();
  rl.question("which piece?: ", (whichPiece) => {
    rl.question("to where?: ", (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

var game = new Game();
game.start();


// Tests

if (typeof describe === "function") {
  describe("Game", function() {
    it("should have a board", function() {
      assert.equal(game.board.constructor.name, "Board");
    });
    it("board should have 24 checkers", function() {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe("Game.moveChecker()", function () {
    it("should move a checker", function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker("50", "41");
      assert(game.board.grid[4][1]);
      game.moveChecker("21", "30");
      assert(game.board.grid[3][0]);
      game.moveChecker("52", "43");
      assert(game.board.grid[4][3]);
    });
    it("should be able to jump over and kill another checker", function() {
      game.moveChecker("30", "52");
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
