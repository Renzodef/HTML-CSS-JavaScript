// In Global Execution Contest there are two phases:
// 1) Creation Phase: creation of the global object Window and hoisting of variables and functions
// 2) Execution Phase: execution line by line of the code
// This will return an error
// because we are calling a function before its declaration
// but hoisting won't load in memory the functions assigned to a variable with let or const
// (functions can't be assigned to a variable with var)
try {
    fn();
    let fn = function () {
        console.log("ciao")
    }
}
catch (err) {
    console.log("Reference Error!")
}

/*
Output:
Reference Error!
*/