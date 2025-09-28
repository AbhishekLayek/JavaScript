let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

/*  Event Propagate thion:

    Phases:
    1. Bubbling
    2. Capturing
    3. Target
*/

// addEventListener will takree parameters as - event, callback function and boolean value.
// If the boolean value is false then bubbling will happen, and the event will propagate from child to parent.

a.addEventListener("click", ()=>{
    console.log("Parent");
});

b.addEventListener("click", (e)=>{
    console.log("Child");
    e.stopPropagation();  // --> To Stop The Propagation
});

c.addEventListener("click", ()=>{
    console.log("Grand Child");
    
});


let d = document.querySelector("#d");
let e = document.querySelector("#e");
let f = document.querySelector("#f");

// addEventListener will takree parameters as - event, callback function and boolean value.
// If the boolean value is true then capturing will happen, and the event will propagate from parent to child.

d.addEventListener("click", ()=>{
    console.log("Parent");
}, true);

e.addEventListener("click", (e)=>{
    console.log("Child");
    e.stopPropagation();  // --> To Stop The Propagation
}, true);

f.addEventListener("click", ()=>{
    console.log("Grand Child");
    
}, true);