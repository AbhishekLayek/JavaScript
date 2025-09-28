// Nested Function: A Function Inside Another Function Is Called As Nested Function

function func1(){
    let a = 10;
    console.log(a);
    function func2(){
        let b = 20;
        console.log(b);
    }
    func2();
}
func1();
