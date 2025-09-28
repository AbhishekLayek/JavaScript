/* 
let li1 = document.querySelector(".list-items:nth-child(1)");
let li2 = document.querySelector(".list-items:nth-child(2)");
let li3 = document.querySelector(".list-items:nth-child(3)");
let li4 = document.querySelector(".list-items:nth-child(4)");

li1.addEventListener("click",()=>{
    li1.style.backgroundColor="skyblue";
})

li2.addEventListener("click",()=>{
    li2.style.backgroundColor="skyblue";
})

li3.addEventListener("click",()=>{
    li3.style.backgroundColor="skyblue";
})

li4.addEventListener("click",()=>{
    li4.style.backgroundColor="skyblue";
})

// Add New list Element

let ul = document.querySelector("ul");

let li5 = document.createElement("li");
ul.append(li5);

li5.innerText = "Spring";
li5.style.listStyleType = "none";
li5.setAttribute("class", "list-items");

// To Add The Same Event We Have To Manually Apply Event, To Overcome This Drawback We Will Go For Event Delegation

li5.addEventListener("click",()=>{
    li5.style.backgroundColor="skyblue";
})

*/


/* --------------------------------------------- Event Delegation ----------------------------------------------- */


let ul = document.querySelector("ul");

ul.addEventListener("click", (e)=>{
    if(e.target.matches(".list-items")){
        e.target.style.backgroundColor="skyblue";
    }
})

let li = document.createElement("li");

ul.append(li);

li.innerText = "Spring";
li.style.listStyle = "none";
li.setAttribute("class", "list-items");