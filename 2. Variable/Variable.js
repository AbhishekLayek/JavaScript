// ------------------------- var ----------------------------

var a; // declaration

a = 10; // initialization
console.log(a);

var b = 20; // declaration and initialization in same line
console.log(b);

a = 30; // re-initialization
console.log(a);

var a = "Abhishek"; // re-declaration
console.log(a);

// ------------------------- let -----------------------------

let c; // declaration

c = 40; // initialization
console.log(c);

let d = 50; // declaration and initialization in same line
console.log(d);

c = 60; // re-initialization
console.log(c);

// let c = "Hello"; --> re-declaration is not possible


// ------------------------ const -----------------------------

// const e; --> declaration is not possible
// e = 10; --> initialization is not possible

const e = "JavaScript"; // initialization
console.log(e);

// e = 20; --> re-initialization is not possible
// const e = "Hi"; --> re-declration is not possible


// ------------------- Student Details ---------------------

const s_name = 'Abhishek';
var s_grade = "A";
let s_age = 23;
console.log("Student Details: \n" + s_name , s_grade, s_age);

// ------------------- Employee Details ---------------------

const e_name = `Raktim`;
var e_sal = 28000.50;
let e_dept = "development";
console.log("Employee Details: \n" + e_name, e_sal, e_dept);