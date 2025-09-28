// 1. Object.freeze(): This method is used to protect the object from modification. If the object is freeze we can't perform create,insert and delete operations, we can perform only read operation.

let obj = {
    id: 101,
    name: "Abhi"
}
console.log(obj); // { id: 101, name: 'Abhi' }

Object.freeze(obj);

// Insert
obj.age = 23;
console.log(obj); // { id: 101, name: 'Abhi' }

// Read
console.log(obj.name); // Abhi

// Update
obj.id = 102;
console.log(obj); // { id: 101, name: 'Abhi' }

// Delete
delete(obj.id);
console.log(obj); // { id: 101, name: 'Abhi' }


// 2. Object.isFrozen(): This method is used to check the object is freeze or not, it will return boolean value

console.log(Object.isFrozen(obj)); // true

// 3. Object.seal(): This method is used to seal the object.If we sealed the object then we can apply only read and update operations.

let obj1 ={
    id: 1,
    name: "Raktim"
}
console.log(obj1); // { id: 1, name: 'Raktim' }

Object.seal(obj1);

// Insert
obj1.age = 24;
console.log(obj1); // { id: 1, name: 'Raktim' }

// Read
console.log(obj1.name); // Raktim

// Update
obj1.id = 2;
console.log(obj1); // { id: 2, name: 'Raktim' }

// Delete
delete(obj1.id); // { id: 2, name: 'Raktim' }

// 4. Object.isSealed(): This method is used to check the object is sealed or not.

console.log(Object.isSealed(obj1)); // true

// 5. Object.keys(): This method will return array which will store the keys

let k = Object.keys(obj1);
console.log(k); // [ 'id', 'name' ]

// 6. Object.values(): This method will return array which will store the values

let v = Object.values(obj1);
console.log(v); // [ 2, 'Raktim' ]

// 7. Object.entries(): This method will return array which will store the key and value pair

let e = Object.entries(obj1);
console.log(e); // [ [ 'id', 2 ], [ 'name', 'Raktim' ] ]

// 8. Object.assign(): This method will used to update or modify the whole object with new object

let src = {
    id: 4,
    name: "Deep"
}
console.log(src); // { id: 4, name: 'Deep' }

let target = {
    id: 5,
    name: "Sayan"
}
Object.assign(src, target);
console.log(src); // { id: 5, name: 'Sayan' }

// 9. Object.groupBy():

let fruits = [{ name: "Apple",price: 140 }, { name: "banana",price: 40 }, { name: "Cherry",price: 200 }];

function callback({price}) {
    return (price > 100)?"Ok":"Low Price";
}

let res = Object.groupBy(fruits, callback);
console.log(res);