let str = "Bengaluru";
let rev ="";
for(let i = str.length - 1; i >= 0; i--){
    rev = rev + str.charAt(i);
}
console.log("Reverse String Is: " + rev);