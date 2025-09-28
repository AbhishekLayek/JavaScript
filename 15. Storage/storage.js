console.log("Js Storage:");

/* 
    We have two types of storages in JS.
    1. Local Storage
    2. Session Storage

    we have some inbuilt methods: 
    1. setItem("key", "value"): It is used to set the data in the form of key and value pair
    2. getItem("key"): It is used to fetch the data based on specified key
    3. removeItem("key"): It is used to remove the data based on specified key
    4. length: It is used to find the number of the data present in the storage
    5. clear: It is used to remove all the data form the storage

    Note: There is one difference between localStorage and sessionStorage, i.e if we close the application then also the data will be present
          in the localStorage until we apply close() method but if we close the application then data will be removed from sessionstorage.
*/


localStorage.setItem("id", 101);
localStorage.setItem("name", "Abhishek");

console.log(localStorage.getItem("id"));
console.log(localStorage.getItem("name"));

console.log(localStorage.length);

localStorage.removeItem("id");

console.log(localStorage.length);

localStorage.clear();

sessionStorage.setItem("id",102);
sessionStorage.setItem("name","Payel");

console.log(sessionStorage.getItem("name"));

console.log(sessionStorage.length);

sessionStorage.removeItem("id");

console.log(sessionStorage.length);

sessionStorage.clear();