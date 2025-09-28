let obj= {
    id: 101,
    name: "Abhishek",
    skills: ["Java", "JavaScript", "SQL"],
    project: ()=>{
        console.log("Food Application Using Servlets & JSP");
    }
}

obj.skills.map((element)=>{
    console.log(element);
})

/*
Output:
Java
JavaScript
SQL 
*/

obj.project(); // Food Application Using Servlets & JSP


let obj1 = {
    id: 100,
    name: "Ram",
    data: function func(){
        console.log(this.id); // Note: this keyword inside named function points to the current object, in this case current object is obj1
    },
    data1: ()=>{
        console.log(this.id); // Not: this keyword inside arrow function points to the global object or window object.
    }
}

obj1.data(); // 100
obj1.data1(); // undefined