// Simple Object

let o = {
    id: 100,
    name: "Abhi"
}

// Object destructuring For Simple Object

let {id} = o;
console.log(id); // 100


// Nested Object
let obj = {
    id: 101,
    name: "Abhishek",
    frontend: {
        lang: "Html",
        backend: {
            lang: "Java"
        }
    }
}

// Object Destructuring For Nested Object

let {lang} = obj.frontend.backend;

console.log(lang); // Java
