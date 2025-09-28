// ------------------------ Declaration ----------------------

let arr = new Array();

// ----------------------  Initialization --------------------

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

// ------------------------ Utilization -----------------------

console.log(arr); // [ 10, 20, 30 ]

// ---------------- Declaration & Initialization --------------

let brr = [10, 20, 30, 40, 50];
console.log(brr); // [ 10, 20, 30, 40, 50 ]

// ---------------------- Reinitilization --------------------

brr[1] = 60;
brr[2] = 70;
console.log(brr); // [ 10, 60, 70, 40, 50 ]

// --------------- Copy One Array To Another Array ------------

let crr = brr;
console.log(crr); // [ 10, 60, 70, 40, 50 ]

// -------------------- Length Of The Array -------------------

console.log(arr.length); // 3
console.log(brr.length); // 5

