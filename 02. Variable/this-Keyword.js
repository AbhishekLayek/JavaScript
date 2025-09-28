// thsi Keyword: whenever the local variable name and global variable name both are same , to differentiate between them we'll go for this keyword.

var a = 20;

function func(){
    var a = 10;
    console.log(a); // 10
    console.log(this.a); // 20
    console.log(this); // window object
}
func();
console.log(func);  /* function func(){
                            var a = 10;
                            console.log(a); // 10
                            console.log(this.a); // 20
                            console.log(this); // window object
                        } 
                    */