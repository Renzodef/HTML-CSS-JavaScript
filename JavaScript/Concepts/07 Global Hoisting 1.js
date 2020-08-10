// In Global Execution Contest there are two phases:
// 1) Creation Phase: creation of the global object Window and hoisting of variables and functions
// 2) Execution Phase: execution line by line of the code
// This won't return an error, but undefined
// That's because of hoisting,
// so global variables are loaded in memory during creation phase
console.log(a);
var a = 10;

/*
Output:
undefined
*/