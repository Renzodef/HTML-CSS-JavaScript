// Promises represent the asynchronous equivalent of the try-catch statement
// A promise can be resolved, rejected 
// or pending (when the result of an asynchronous activity didn't arrive yet)
// They are very useful for example in Server Requests (because they are asynchronous)
// and in this way we can handle the errors

// The promise will return success if the condition is True
// It will return Failed if the condition is False
let p = new Promise((resolve, reject) => {
    let a = 2
    // True condition
    if (a == 2) {
        resolve('Success')
    } else {
        figa('Failed')
    }
})

// Then will be called if the promise satisfy the True condition
// Catch will be called if the condition of the promise is not satisfied
p.then((message) => {
    console.log("This is in the then => " + message)
}).catch((message) => {
    console.log("This is in the catch => " + message)
})

/*
Output:
This is in the then => Success
*/