// Lexical Scope: The Ability Of Javascript Engine To Search For The Variables In The Current scope, If It Is Not Present In current Scope Then Search In The Parent scope, Is Called As Lexical scope.
// Closures: Closures Is A Function Which Will Store The Address Of The Variable From Previous Function, Even Though The Execution Of The Function Completed.

function parent(){
    let a = 10;
    function sub1(){
        let b = 20;
        function sub2(){
            let c = 30;
            console.log(a);
            console.log(b);
            console.log(c);   
        }
        sub2();
    }
    sub1();
}
parent();