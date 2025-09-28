let arr = [()=>{ console.log("Hii");}, ()=>{ console.log("Hello");}, ()=>{ console.log("Bye");}];

arr.map((element)=>{
    element();
})

/*
Output:

Hii
Hello
Bye
*/