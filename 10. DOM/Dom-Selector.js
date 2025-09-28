// 1. getElementById

let id = document.getElementById("first");

id.style.color = "red";

// 2. getElementByClassName

let cls = document.getElementsByClassName("second");

console.log(cls);
console.log(Array.isArray(cls));

let arr = Array.from(cls);
console.log(arr);
console.log(Array.isArray(arr));

arr[0].style.color = "blue";
arr[1].style.color = "green";
arr[2].style.color = "yellow";


// 3. getElementByTagName

let tag = document.getElementsByTagName("h3");

console.log(tag);
console.log(Array.isArray(tag));

let arr1 = Array.from(tag);
console.log(arr1);
console.log(Array.isArray(arr1));

arr1[0].style.color = "skyblue";
arr1[1].style.color = "yellowgreen";

// 4. querySelector

let query = document.querySelector("#query");

query.style.color = "aqua";


// 5. queryselectorAll

let qall = document.querySelectorAll("#qid, .qclass");

console.log(qall);
console.log(Array.isArray(qall));

let arr2 = Array.from(qall);
console.log(arr2);
console.log(Array.isArray(arr2));

arr2[0].style.color="aquagreen";
arr2[1].style.color="goldenrod";