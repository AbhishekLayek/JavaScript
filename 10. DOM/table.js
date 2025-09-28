let table = document.createElement("table");

let tr = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
th1.innerText = "Name";
th2.innerText = "Age";
th3.innerText = "Email";
tr.append(th1);
tr.append(th2);
tr.append(th3);

let tr1 = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
td1.innerText = "Abhishek Layek";
td2.innerText = "23";
td3.innerText = "abhisheklayek57@gmail.com";
tr1.append(td1);
tr1.append(td2);
tr1.append(td3);

let tr2 = document.createElement("tr");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
td4.innerText = "Raktim Patra";
td5.innerText = "24";
td6.innerText = "raktim7@gmail.com";
tr2.append(td4);
tr2.append(td5);
tr2.append(td6);


let tr3 = document.createElement("tr");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
let td9 = document.createElement("td");
td7.innerText = "Sayan Mondal";
td8.innerText = "23";
td9.innerText = "sayan7@gmail.com";
tr3.append(td7);
tr3.append(td8);
tr3.append(td9);

th1.style.border = "2px solid black";
th2.style.border = "2px solid black";
th3.style.border = "2px solid black";

td1.style.border = "2px solid black";
td2.style.border = "2px solid black";
td3.style.border = "2px solid black";
td4.style.border = "2px solid black";
td5.style.border = "2px solid black";
td6.style.border = "2px solid black";
td7.style.border = "2px solid black";
td8.style.border = "2px solid black";
td9.style.border = "2px solid black";

table.append(tr);
table.append(tr1);
table.append(tr2);
table.append(tr3);

table.style.width = "400px";
table.style.height = "160px";
table.style.border = "2px solid black";
table.style.textAlign = "center";

console.log(table);
document.body.append(table);