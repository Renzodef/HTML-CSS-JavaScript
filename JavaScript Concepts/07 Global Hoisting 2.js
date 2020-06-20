// In Global Execution Contest there are two phases:
// 1) Creation Phase: creation of the global object Window and hoisting of variables and functions
// 2) Execution Phase: execution line by line of the code
// This will return an error
// because hoisting won't load in memory during creation phase
// the variables defined with let or const
try {
    console.log(a);
    let a = 10; 
}
catch(err) {
    console.log("Reference Error!")
}

/*
Output:
Reference Error!
*/
