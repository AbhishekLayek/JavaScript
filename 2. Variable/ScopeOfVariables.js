// -------- 1. Block Scope -----------

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a, b, c);
}
console.log(a); // 10
// console.log(b); --> Error
// console.log(c); --> Error

// ------- 2. Function Scope ---------

function func(){
    var d = 10;
    let e = 20;
    const f = 30;
    console.log(d, e, f);
}
func();
// console.log(d, e, f); --> Error

// --------- 3. Global Scope---------

var g = 10;
let h = 20;
const i = 30;

function add(){
    console.log(g+h+i);
}
add();

function mul(){
    console.log(g*h*i);
}
mul();