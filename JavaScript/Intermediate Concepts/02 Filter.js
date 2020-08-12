// Creating an array
let a = [1, 5, 6, 7, 9, 21, 64];
// Filter can be used only with arrays
// Filter function that returns only the odd numbers of the array
let b = a.filter(function (x) {
    return x % 2 == 0;
});
// Same function but written as arrow function
let c = a.filter(x => x % 2 == 0);
// Printing the results of the two functions
console.log(b);
console.log(c);

/*
Output:
[ 6, 64 ]
[ 6, 64 ]
*/