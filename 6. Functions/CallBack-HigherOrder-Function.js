/* 
    CallBack Function: Any Function Which Is Is Passed As A Argument To Another Function Is Called As CallBack Function.
    Higher Order Function: Any Function Which Takes Another Function As Parameter Is Called As Higher Order Function.
*/

function Hof(callback){
    console.log("Hey I Am Higher Order Function");
    callback();
}
Hof(callback);

function callback(){
    console.log("Hey I Am CallBack Function");
}



// Q1. WAP To Find The Even Numbers From 1 To 5, Also Find The Factorial Of Even Number.

// even() Is Higher Order Function Because It Will Take factorial() function As A Parameter.
function even(s, e, factorial){
    for(let i = s; i < e; i++){
        if(i % 2 == 0){
            console.log("Even Number: " + i);
            factorial(i);
        }
    }
}
even(1, 5, factorial);

// factorial() Is CallBack Function Because It Will Passed As Argument To even() Function.
function factorial(num){
    let fact = 1;
    for(let i = num; i > 1; i--){
        fact *= i;
    }
    console.log("Factorial Of " + num + " Is: " + fact);
    
}