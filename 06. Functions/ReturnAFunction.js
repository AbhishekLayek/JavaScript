function a(){
    console.log("Hey I Am Function a");
    function b(){
        console.log("Hey I Am Function b");
        function c(){
            console.log("Hey I Am Function c");
        }
        return c;
    }
    return b;
}
a()()();