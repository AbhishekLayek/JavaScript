// Prototype Inheritence: Inheriting the Properties From One Object to Another Object Is called As Prototype Inheritence.

let a = {
    id: 101,
    name : "Abhishek"
}

let b = {
    address : "West Bengal"
}

a.__proto__ = b;

console.log(a.address);
