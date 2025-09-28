// -------------------------- Named Function ----------------------------

// Q1. Addition Of Two Numbers
function add(){
    let a = 10;
    let b = 20;
    console.log(`Addition Of ${a} And ${b} Is ${a+b}`);
}
add();

// Area Of Circle
function circle(){
    let pi = 3.142;
    let r = 5;
    let area = pi*r*r;
    console.log("Area Of Circle: " + area);
}
circle();

// Q2. Print 1 To 10
function print(){
    console.log("Numbers From 1 To 10: ");
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
print();

// Q3. Print Even From 1 To 10
function PrintEven(){
    console.log("Even Numbers From 1 To 10: ");
    for(let i = 1; i <= 10; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
PrintEven();

// Q4. Print Odd Numbers From 1 To 10
function PrintOdd(){
    console.log("Odd Numbers From 1 To 10: ");
    for(let i = 1; i <= 10; i++){
        if(i % 2 != 0){
            console.log(i);
            
        }
    }
}
PrintOdd();

// Q5. Sum Of Numbers From 1 To 10
function sumNumbers(){
    let sum = 0;
    for(let i = 1; i <= 10; i++){
        sum += i;
    }
    console.log("Sum Of Numbers From 1 To 10 Is: " + sum);
}
sumNumbers();

// Method With Parameter

function func1(a, b){
    console.log(`Addition Of ${a} and ${b} Is ${a+b}`);
}
func1(10, 20); // Addition Of 10 and 20 Is 30

// Method With Parameter (Dynamic Input)

function func2(a, b){
    console.log(`Subtraction Of ${a} and ${b} Is ${a-b}`);
}
func2(Number(prompt("Enter First Number: ")),Number(prompt("Enter Second Number: ")));

// Method With Return Type

function func3(){
    let a = 10;
    let b = 20;
    let res = a * b;
    return res;
}
let result1 = func3();
console.log(result1); // 200
console.log(func3()); // 200

// Method With Return Type (Dynamic Input)

function func4(){
    let a = Number(prompt("Enter First Number: ")); // 20
    let b = Number(prompt("Enter Second Number: ")); // 10
    let res = a / b;
    return res;
}
let result2 = func4();
console.log(result2); // 2
console.log(func4()); // 2

// Method With Parameter And Return Type

function func5(a, b){
    let res = a + b;
    return res;
}
let result3 = func5(20, 30);
console.log(result3); // 50
console.log(func5(30, 40)); // 70

// Method With Parameter And Return Type (Dynamic Input)

function func6(a,b){
    let res = a + b;
    return res;
}
let result4 = func6(Number(prompt("Enter First Value: ")),Number(prompt("Enter Second Value: ")));
console.log(result4);