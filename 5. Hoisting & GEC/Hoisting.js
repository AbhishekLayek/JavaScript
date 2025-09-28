// Hoisting: variable declaration move its top of the stack, is called hoisting.

console.log(a); // undefined
var a = 10;

console.log(b); // Uncaught Reference Error
let b = 20;

console.log(c); // Uncaught Reference Error
const c = 30;