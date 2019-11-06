//Write a JavaScript program to display the current day and time.
var now = new Date();
console.log(now);

//Write a JavaScript program to convert a number to a string.
var num = 15;
var n = num.toString();
console.log(n);

//Write a JavaScript program to convert a string to the number.
var str = '123';
str = Number('123');
console.log(str);

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
var x = 0;

// Boolean(x); 
console.log(Boolean(x)); 

// Null
var foo = null;
console.log(foo);

// Undefined
var theFu; // theFu has been declared, but its value is undefined
console.log(typeof theFu);

// Number
var thisIsANumber = 64;
console.log(thisIsANumber);

// NaN
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log(sanitise('NotANumber'));
// expected output: NaN

// String
let longString = "This is a very long string which needs " +
"to wrap across multiple lines " 
console.log(longString);

//Write a JavaScript program that adds 2 numbers together.
myVar = 5 + 10; // assigned 15
console.log(myVar);

//Write a JavaScript program that runs only when 2 things are true.
var a = 3;
var b = -2;

console.log(a > 0 && b > -5);
// expected output: true

console.log(a > 0 || b > 0);
// expected output: true

console.log(!(a > 0 || b > 0));
// expected output: false

//Write a JavaScript program that runs when 1 of 2 things are true.
var a = 3;
var b = -2;

console.log(a > 0 && b > 0);
// expected output: false

console.log(a > 0 || b > 0);
// expected output: true

console.log(!(a > 0 || b > 0));
// expected output: false

//Write a JavaScript program that runs when both things are not true.

var a = 3;
var b = -2;

console.log(a > 0 && b > 0);
// expected output: false

console.log(!(a > 0 || b > 0));
// expected output: false