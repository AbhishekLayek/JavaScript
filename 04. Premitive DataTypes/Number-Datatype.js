let a = 10;
let b = 20;
console.log(a+b); // 30
console.log(a-b); // -10
console.log(a*b); // 200
console.log(a/b); // 0.5

// ----- Inbuilt Methods Of Number Datatype -----

// 1. parseInt()
let c = 10/3;
console.log(parseInt(c)); // 3

// RealWorld Example Of parseInt() : Count The Number Of Digits In A Given Number

let x = 123456;
let count = 0;
while(x != 0){
    let rem = parseInt(x % 10);
    count++;
    x = parseInt(x/10);
}
console.log("Count Of Digits: " + count); // 6

// 2. parseFloat()
let d = 10/3;
console.log(parseFloat(c)); // 3.3333333333333335

// 3. toFixed()
let e = 31.324
console.log(e.toFixed(2)); // 31.32

let f = 31.326
console.log(f.toFixed(2)); // 31.33

// 4. Number.isInteger()
let g = 10;
console.log(Number.isInteger(g)); // true

let h = 10.45;
console.log(Number.isInteger(h)); // false

// 5. Number.isFinite
let i = 10/2;
console.log(Number.isFinite(i)); // true

let j = 10/0;
console.log(Number.isFinite(j)); // false

// 6. Number.isNaN() : NaN means Not a Number
console.log(0/0); // Nan
console.log(parseInt("Hello")); // NaN
console.log("Hi" * 2); // NaN

let k = NaN;
console.log(Number.isNaN(k)); // true