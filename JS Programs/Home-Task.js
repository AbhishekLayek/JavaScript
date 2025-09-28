/* ------------------------ 1. Area Of Triangle ------------------------- */

// Method With Parameter

function areaOfTriangle1(b, h){
    let area = 0.5*(b*h);
    console.log("Area Of Triangle Is: " + area);
}
areaOfTriangle1(20, 10);

// Method With Return Type

function areaOfTriangle2(){
    let b = 30;
    let h = 20;
    let area = 0.5*(b*h);
    return area;
}
console.log("Area Of Triangle Is: " + areaOfTriangle2());

// Method With Parameter And Return Type

function areaOfTriangle3(b, h){
    let area = 0.5*(b*h);
    return area;
}
console.log("Area Of Triangle Is: " + areaOfTriangle3(20, 20));

/* ----------------------- 2. Area Of Rectangle --------------------------- */

// Method With Parameter

function areaOfRectangle1(w, h){
    let area = w*h;
    console.log("Area Of Rectangle Is: " + area);
}
areaOfRectangle1(20, 10);

// Method With Return Type

function areaOfRectangle2(){
    let w = 30;
    let h = 20;
    let area = w*h;
    return area;
}
console.log("Area Of Rectangle Is: " + areaOfRectangle2());

// Method With Parameter And Return Type

function areaOfRectangle3(w, h){
    let area = w*h;
    return area;
}
console.log("Area Of Rectangle Is: " + areaOfRectangle3(40, 30));

/* ----------------------- 3. Area Of Trapezoid --------------------------- */

// Method With Parameter

function areaOfTrapezoid1(a, b , h){
    let area = 0.5*(a + b)*h;
    console.log("Area Of Trapezoid Is: " + area);
}
areaOfTrapezoid1(10, 20, 30);

// Method With Return Type

function areaOfTrapezoid2(){
    let a = 12;
    let b = 22;
    let h = 33;
    let area = 0.5*(a + b)*h;
    return area;;
}
console.log("Area Of Trapezoid Is: " + areaOfTrapezoid2());

// Method With Parameter And Return Type

function areaOfTrapezoid3(a, b , h){
    let area = 0.5*(a + b)*h;
    return area;
}
console.log("Area Of Trapezoid Is: " + areaOfTrapezoid3(15, 25, 40));

/* ------------------------ 4. Area Of Ellipse ------------------------------- */

// Method With Parameter

function areaOfEllipse1(a, b){
    let area = 3.142*(a*b);
    console.log("Area Of Ellipse Is: " + area);
}
areaOfEllipse1(10, 30);

// Method With Return Type

function areaOfEllipse2(){
    let a = 12;
    let b = 30;
    let area = 3.142*(a*b);
    return area;
}
console.log("Area Of Ellipse Is: " + areaOfEllipse2());

// Method With Parameter And return Type

function areaOfEllipse3(a, b){
    let area = 3.142*(a*b);
    return area;
}
console.log("Area Of Ellipse Is: " + areaOfEllipse3(10, 20));

/* ------------------------ 5. Area Of Square ------------------------------- */

// Method With Parameter

function areaOfSquare1(a){
    let area = a*a;
    console.log("Area Of Square: " + area);
    
}
areaOfSquare1(15);

// Method With Return Type

function areaOfSquare2(){
    let a = 20;
    let area = a*a;
    return area;
    
}
console.log("Area Of Square: " + areaOfSquare2());

// Method with Parameter And Return Type

function areaOfSquare3(a){
    let area = a*a;
    return area;
    
}
console.log("Area Of Square: " + areaOfSquare3(25));

/* ------------------------ 6. Area Of Parallelogram ------------------------------- */

// Method With Parameter

function areaOfParallelogram1(b, h){
    let area = b*h;
    console.log("Area Of Parallelogram: " + area);
    
}
areaOfParallelogram1(10, 20);

// Method With Return Type

function areaOfParallelogram2(){
    let b = 15;
    let h = 25;
    let area = b*h;
    return area;
    
}
console.log("Area Of Parallelogram: " + areaOfParallelogram2());

// Method With Parameter And Return Type

function areaOfParallelogram3(b, h){
    let area = b*h;
    return area;
    
}
console.log("Area Of Parallelogram: " + areaOfParallelogram3(20, 30));

/* ------------------------ 7. Area Of Circle ------------------------------- */

// Method With Parameter

function areaOfCircle1(r){
    let area = 3.142*r*r;
    console.log("Area Of Circle: " + area);
    
}
areaOfCircle1(10);

// Method With Return Type

function areaOfCircle2(){
    let r = 5;
    let area = 3.142*r*r;
    return area;
}
console.log("Area Of Circle: " + areaOfCircle2());

// Method With Parameter And Return Type

function areaOfCircle3(r){
    let area = 3.142*r*r;
    return area;
}
console.log("Area Of Circle: " + areaOfCircle3(15));

/* ------------------------ 8. Area Of Sector ------------------------------- */

// Method With Parameter

function areaOfSector1(r, theta){
    let area = 0.5*r*r*theta;
    console.log("Area Of Sector: " + area);
    
}
areaOfSector1(10, 45);

// Method With Return Type

function areaOfSector2(){
    let r = 5;
    let theta = 60;
    let area = 0.5*r*r*theta;
    return area;
}
console.log("Area Of Sector: " + areaOfSector2());

// Method With Parameter And Return Type

function areaOfSector3(r, theta){
    let area = 0.5*r*r*theta;
    return area;
}
console.log("Area Of Sector: " + areaOfSector3(20, 180));