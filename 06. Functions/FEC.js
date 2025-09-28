let a = 10; // (1) --> [GEC] : a = value unavialable, b = value unavialable
let b = 20; // (2) --> a = 10, b = value unavialable
console.log(a+b); // (3) --> a = 10, b = 20

function add(sub){
    let a = 30; // (5) --> a = value unavialable, b = value unavialable, res = value unavialable
    let b = 40; // (6) --> a = 30, b = value unavialable
    sub();      // (7), (12) --> res = value unavialable
    let res = a+b; // (13) --> res = value unavialable
    console.log(res); // (14) --> res = 30+40 = 70 
} // (15) --> printed 70

add(sub) // (4) --> printed 30

function sub(){
    let x = 30; // (8) --> x = value unavialable, y = value unavialable, res = value unavialable
    let y = 20; // (9) --> x = 30,y = value unavialable, res = value unavialable
    let res = x - y; // (10) --> x = 30, y = 20, res = value unavialable
    console.log(res); // (11) --> x = 30, y = 20, res = 30-20 = 10
}