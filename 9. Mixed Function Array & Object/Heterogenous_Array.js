let arr = [10, 'Hi', null, undefined, true, ()=>{ console.log("I Am Function") }, { id:101, name: "Abhi"}];
arr.map((element)=>{
    console.log(element);
    
})

/* 
Output:
10
Hi
null
undefined
true
[Function (anonymous)]   
{ id: 101, name: 'Abhi' }
*/

arr[5](); // I Am Function

console.log(arr[6].id); // 101
console.log(arr[6].name); // Abhi