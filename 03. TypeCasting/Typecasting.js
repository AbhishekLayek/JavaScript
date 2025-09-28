// ------------------- Implicit TypeCasting ---------------------

let a = "10";
console.log(typeof a); // string
let b = a + 8;
console.log(b); // 108
console.log(typeof b); // string

let c = "5";
console.log(typeof c); // string
let d = c * 5;
console.log(d); // 25
console.log(typeof d); // number


// -------------------- Explicit Typecasting --------------------

let e = 10;
console.log(typeof e); // number
let f = String(e);
console.log(typeof f); // string

let g = "10";
console.log(typeof g); // string
let h = Number(g);
console.log(typeof h); // number


// --------------- Realtime Example For Typecasting ------------

let num1 = prompt("Enter First Value: "); // 10
// Internally number is converted to string
console.log(typeof num1); // string

let num2 = prompt("Enter Second Value: "); // 20
// Internally number is converted to string
console.log(typeof num2); // string

console.log(num1 + num2); // 1020

// Explicitly we are converting from string to number
let n1 = Number(num1); // 10
let n2 = Number(num2); // 20
console.log(n1 + n2); // 30

let n3 = Number(prompt("Enter First Value: ")); // 30
let n4 = Number(prompt("Enter Second value: ")); // 40
console.log(n3 + n4); // 70