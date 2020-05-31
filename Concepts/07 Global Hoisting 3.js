// In Global Execution Contest there are two phases:
// 1) Creation Phase: creation of the global object Window and hoisting of variables and functions
// 2) Execution Phase: execution line by line of the code
// The function is called before is declaration
// but here it will return "hello" anyway and not undefined 
// because functions are loaded completely during the creation phase for the hoisting
test();
function test() {
    console.log("Hello")
}

/*
Output:
Hello
*/