'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors (hand1, hand2) {
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  if (hand1 === hand2) {
    return 'It\'s a tie!';
  } else if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
    return 'Hand one wins!';
  } else {
    return 'Hand two wins!';
  }
  return;
}

function handTwoAI () {
  var choiceArray = ['rock', 'paper', 'scissors'];
  return choiceArray[Math.floor(Math.random() * 3)];
}

function getPrompt () {
  rl.question('hand1: ', (answer1) => {
    // rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, handTwoAI()));
      getPrompt();
    // });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
