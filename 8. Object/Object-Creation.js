// 1st Way: Using new Operator

let obj = new Object();
obj.id = 1;
obj.name = "Abhi";
console.log(obj); // { id: 1, name: 'Abhi' }


// 2nd Way: Using Literal Way

let person = {
    id: 1,
    name: "Abhishek",
    age: 25
}
console.log(person); // { id: 1, name: 'Abhishek', age: 25 }


// 3rd Way: Using Constructor Funtion

function add(id,name){
    this.id = id;
    this.name = name;
}
let o1 = new add(101, "Raktim");
console.log(o1);  // add { id: 101, name: 'Raktim' }


// 4th Way: Using Class{}

class Sample {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
let o2 = new Sample(102, "Sayan");
console.log(o2); // Sample { id: 102, name: 'Sayan' }  