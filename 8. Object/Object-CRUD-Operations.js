// ----------------------- Create Object -------------------------

let person={
    id: 1,
    name: "Abhishek"
}
console.log(person); // { id: 1, name: 'Abhishek' }

// -->Add New property
// #Syntax: object_name.property_name = value;
person.age = 23;
console.log(person); // { id: 1, name: 'Abhishek', age: 23 }


// --------------------  Read/Retrieve Object ---------------------

// --> Read Object Data
console.log(person); // { id: 1, name: 'Abhishek', age: 23 }

// --> Read Object Property
console.log(person.name); // Abhishek


// ------------------------ Update/Modify -------------------------

person.age = 24;
console.log(person); // { id: 1, name: 'Abhishek', age: 24 }


// --------------------------- Delete -----------------------------

// #Syntax: delete(object.property)
delete(person.age);
console.log(person); // { id: 1, name: 'Abhishek' }
