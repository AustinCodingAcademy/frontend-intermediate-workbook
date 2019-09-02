'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function validInput(input1, input2) {
  // Check that input is leter a, b, or c
  let valid = ["a", "b", "c"];
  let found = false;

  for (let i = 0; i < 3; i++) {
    if (input1 !== valid[i] && input2 !== valid[i]) {
      // return found;
    } else {
      found = true;
      return found;
    }
    return found;
  }

}

function movePiece(start, end) {
  // Your code here
  let hand = stacks[start].pop();
  stacks[end].push(hand);
  console.log(`${hand} popped from ${start} and pushed to ${end}`);
}

function isLegal(start, end) {
  // Your code here
  // If starting stack is not empty
  // read last element of stack
  // If end stack is not empty then compare the last element of that stack with read element
  // If it is empty then it's a legal move automatically
  // If the read element is bigger than the last element then the move is illegal.
  
  if (stacks[start].length !== 0) {
    let hand = stacks[start].length-1;
    if(stacks[end].length === 0) {
      return true;
    }else {
      if (hand > stacks[end][stacks[end].length-1]){
        return false;
      }
    }
  }else {
    return false;
  }

}

function checkForWin() {
  // If b or c stack contain [4, 3, 2, 1] then return true
  let win = "4,3,2,1";
  // let winDetected = true;
  console.log(`${stacks.b.join()} vs ${win}`);
  if(stacks.b.join() == win || stacks.c.join() == win) {
    return true;
  } else {
    return false;
  }
  // for (let i = 0; i <= 3; i++) {
  //   console.log(`${stacks.b[i]} or ${stacks.c[i]} is ${win[i]}`)
  //   if(stacks.b[i] === win[i] || stacks.c[i] === win[i]){
      
  //   }else {
  //     winDetected = false;
  //   }
  //   return winDetected;
  // }
}

function clearBoard() {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

function towersOfHanoi(startStack, endStack) {
  let start = startStack.toLowerCase();
  let end = endStack.toLowerCase();

  if (validInput(start, end)){
    if (isLegal(start, end)) {
      if(checkForWin() !== true) {
        movePiece(start, end);
        return false;
      } else {
        console.log("You win!");
        clearBoard();
        return true;
      }
    }else {
      console.log("That move is not legal.");
      return false;
    }
  }else {
    console.log("The input was invalid");
    return false;
  }


}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}