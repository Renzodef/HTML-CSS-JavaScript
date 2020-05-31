// In Function Execution Contest there are two phases:
// 1) Creation Phase: creation of the object argument and hoisting of variables and functions
// 2) Execution Phase: execution line by line of the code
// This won't return an error, but undefined
// That's because of hoisting,
// so function variables are loaded in memory during the creation phase of the function
function fn() {
    console.log(a)
    var a = 10
}
fn()

/*
Output:
undefined
*/