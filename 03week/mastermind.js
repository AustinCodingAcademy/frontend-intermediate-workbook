'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let leg = letters.length;
let solution = generateSolution();
let exact;
let close;
// solution = generateSolution();

// arrsolution = solution.split('');

// function getRandomInt(min, max) {
//   return (Math.floor(Math.random() * (max - min)) + min);
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let leg = letters.length;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}


function generateSolution(){
  let sol = [];
  for(let i = 0; i < 4; i++){
    sol.push(letters[getRandomInt(0, leg)]);
    // console.log(solution);
  }
  return sol;
}


function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}
//hint method: guess/solution comparison, win check

function generateHint(guess, solution) {
  let sDupes = dupesCount(solution);
  let gDupes = dupesCount(guess);
  board = [];
  let exact = 0;
  let close = 0;
  for(let letter in guess){
  if(guess[letter] === solution[letter]){
    console.log(exact +=1);
    board.push(guess[letter]);
    }
    else if (solution.includes(guess[letter])) {
      close +=1;
      console.log('exact '+ exact +'-'+close + ' close ');
    }
  }
console.log(gDupes, sDupes);
//going to have to make it capaable of multiple dupes.
console.log(gDupes[0] !== sDupes[0]);
  if(gDupes.length){
    if(gDupes[0] !== sDupes[0]){
        close --;
      }
    }
  console.log(exact+'-'+close);
}



//regex dupeCount
// function dupeCount(ar){
//    try{ return ar.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
//    catch(e){ return 0; }

   //dupesCount works without regex!
 function dupesCount(arr){
   let dBoard = [];
   console.log(arr.length);
   for(let i = 0; i < arr.length; i ++){
     console.log(arr[i]);
     for(let j = i + 1; j < arr.length; j ++){
       console.log(arr[i], arr[j]);
       if(arr[i] === arr[j]){
         dBoard.push(arr[i]);
         console.log("yup!"+ dBoard);
         return dBoard;
       }
     }
   }
 return dBoard;
}
//take the input and split into array & generate a solution to be compared
function mastermind(guess) {
  // solution = generateSolution();
  guess = guess.split('');
  console.log(solution);// your code here
  generateHint(guess, solution);
}


function getPrompt() {

  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests

// if (typeof describe === 'function') {
//
//   describe('#mastermind()', () => {
//     it('should register a guess and generate hints', () => {
//       solution = 'abcd';
//       mastermind('aabb');
//       assert.equal(board.length, 1);
//     });
//     it('should be able to detect a win', () => {
//       assert.equal(mastermind(solution), 'You guessed it!');
//     });
//   });
//
//   describe('#generateHint()', () => {
//     it('should generate hints', () => {
//       assert.equal(generateHint('abcd', 'abdc'), '2-2');
//     });
//     it('should generate hints if solution has duplicates', () => {
//       assert.equal(generateHint('abcd', 'aabb'), '1-1');
//     });
//
//   });
// }
//  else {

  // generateSolution();
  getPrompt();
