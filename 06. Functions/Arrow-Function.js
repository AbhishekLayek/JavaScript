// -------------------------------------- Arrow Function ----------------------------------------

let f = () =>{
    console.log("Hi I Am Arrow Function");
}
f(); // Hi I Am Arrow function

// *********************** Rules For Arrow Function **************************

// 1. If There Is One Statement Then Braces Are Optional

let a = () => console.log("Good Morning");
a();

// 2. If There Is More Than One Statement Then Braces Are Mandatory

let b = () =>{
    console.log("Hello");
    console.log("Hii");
}
b(); 

// 3. If The Function Takes Only One Parameter Then Parenthesis Are Optional

let c = x =>{
    console.log(x);
}
c(10);

// 4. If The Function Takes More Than One Parameter Then Parenthesis Are mandatory

let d = (x, y) =>{
    console.log(x, y);
}
d(10, 20);

// 5. If The Function Is Not Takeing Any Parameter Then We Can Write Underscore Instead Of Paranthesis

let e = _ =>{
    console.log("No Parameter");
}
e();


// Q1. WAP TO Find The Factorial Of A Given Number

let fact = n =>{
    let mul = 1;
    for(let i = n; i > 1; i--){
        mul *= i;
    }
    return mul;
}
console.log("Factorial Of 5 is: " + fact(5));