// ------------------------ Boolean Datatype ----------------------------

let a = true;
console.log(typeof a); // boolean

let str1 = "Hi";
let str2 = "Hello";
console.log(str1 == str2); // false

// ------------------------ Undefined Datatype ---------------------------

let b;
console.log(b); // undefined
console.log(typeof undefined); // undefined


// ------------------------- Null Datatype -------------------------------

let c = null;
console.log(c); // null
console.log(typeof null); // object

// ------------------------- BigInt Datatype -----------------------------

let d = 12345;
console.log(typeof d); // number

let e = 12345n;
console.log(typeof e); // bigint

let f = BigInt(12345);
console.log(typeof f); // bigint

let g = BigInt("12345");
console.log(typeof g); // bigint

// -------------------------- Symbol Datatype ----------------------------

let str3 = "Hii";
let str4 = "Hii";
console.log(str3 == str4); // true

let str5 = Symbol("Hii");
let str6 = Symbol("Hii");
console.log(str5 == str6); // false


// Loosly Equals (==) Operator And Strictly Equals (===) Operator

let i = 10;
let s = "10";

// Loosly Equals (==) : It will compare the values irrespective of datatypes
console.log(i == s); // true

// Strictly Equals (===) : It will compare values as well as datatypes
console.log(i === s); // false