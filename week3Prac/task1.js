// The main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope)
// while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
// https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

// use IntelliCode
// https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode

// js string document: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var helloworld = 'Hello World';
// console.log(helloworld[0]);

// Comparing strings
let a = 'ac';
let b = 'ea';
if (a < b) {
  // true
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}

// lowercase and uppercase
let c = 'c';
let d = 'D';

console.log(c.toUpperCase());
console.log(d.toLowerCase());
console.log(c + d);

// how to write long strings
let longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because ' +
  'otherwise my code is unreadable.';

console.log(longString);
longString =
  'This is a very long string which needs \
                 to wrap across multiple lines because \
                 otherwise my code is unreadable.';

console.log(longString);
