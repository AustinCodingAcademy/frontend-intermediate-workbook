'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var playerTurn = 'X';

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn || 
        board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn || 
        board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
}

function verticalWin() {
    if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn || 
        board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn || 
        board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
}

function diagonalWin() {
    if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn || 
        board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
        return true;
    }
}

function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        return true
        console.log('Player' + playerTurn + 'Won!');
    } else {
        return false
    }
}

function checkForDraw() {
    
    var emptySpots = 9;
    
    for (var i = 0; i < board.length; i++){
        for (var j = 0; j < board[i].length; j++){
            if (board[i][j] != " "){
                emptySpots --;
            }
        }
    }    

    if(emptySpots === 0 && !checkForWin()) {
        console.log("\nCat's Game! Let's Reset...\n");
        resetBoard();
    }
}

function isDraw() {
    if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn && 
        board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn && 
        board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true
        console.log('Its a Draw');
    } else {
        return false
    }
}

function ticTacToe(row, column) {
    if(board[row][column] == " ") {
        if(row == 0 && column == 0) {
            board[0][0] = playerTurn;
        }
        if(row == 0 && column == 1) {
            board[0][1] = playerTurn;
        }
        if(row == 0 && column == 2) {
            board[0][2] = playerTurn;
        }
        
        
         if(row == 1 && column == 0) {
            board[1][0] = playerTurn;
        }
        if(row == 1 && column == 1) {
            board[1][1] = playerTurn;
        }
        if(row == 1 && column == 2) {
            board[1][2] = playerTurn;
        }
        
        if(row == 2 && column == 0) {
            board[2][0] = playerTurn;
        }
        if(row == 2 && column == 1) {
            board[2][1] = playerTurn;
        }
        if(row == 2 && column == 2) {
            board[2][2] = playerTurn;
        }
    }
    
    if (checkForWin() == true) {
        console.log("Player" + playerTurn  + "Wins!");
    } else {
        console.log(isDraw());
    }
    
    playerTurn = (playerTurn == 'X') ? 'O' : 'X';
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function (error, result) {
        ticTacToe(result['row'], result['column']);
        getPrompt();
    });
}



// Tests

if (typeof describe !== 'undefined') {

    describe('#ticTacToe()', function () {
        it('should place mark on the board', function () {
            ticTacToe(1, 1);
            assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
        });
        it('should alternate between players', function () {
            ticTacToe(0, 0);
            assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
        });
        it('should check for vertical wins', function () {
            board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function () {
            board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function () {
            board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function () {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
