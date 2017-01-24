'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// hand1/hand2 are variables that will accept the inputs of "rock", "paper" or "scissors"

function rockPaperScissors(hand1, hand2) {

  // check for tie

  if (hand1.toLowerCase() === hand2.toLowerCase()) {
    return "It's a tie!";
  }

  //rock - victory/defeat conditions

  if (hand1.toLowerCase() === "rock" && hand2.toLowerCase() === "scissors") {
    return "Hand 1 wins!";
  }

  if (hand1.toLowerCase() === "rock" && hand2.toLowerCase() === "paper") {
    return "Hand 2 wins!";
  }

  //paper - victory/defeat conditions

  if (hand1.toLowerCase() === "paper" && hand2.toLowerCase() === "rock") {
    return "Hand 1 wins!";
  }

  if (hand1.toLowerCase() === "paper" && hand2.toLowerCase() === "scissors") {
    return "Hand 2 wins!";
  }

  //scissors - victory/defeat conditions

  if (hand1.toLowerCase() === "scissors" && hand2.toLowerCase() === "paper") {
    return "Hand 1 wins!";
  }

  if (hand1.toLowerCase() === "scissors" && hand2.toLowerCase() === "rock") {
    return "Hand 2 wins!";

  // error message if inputs are not rock, paper or scissors

  } else {
    return "Input not recognized. Please enter rock, paper or scissors.";
  }


}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', function () {
    it('should detect a tie', function () {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', function () {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
