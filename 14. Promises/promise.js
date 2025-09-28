// Promise : Promises makes javascript asynchronus.

console.log("Starting...");

let promise = new Promise((resolve, reject)=>{
    if(Math.random() > 0.1){
        resolve("Message Is Delivered");
    }
    else{
        reject("No Message Is Not Delivered");
    }
})

console.log(promise);
promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err); 
});

console.log("Ending....");