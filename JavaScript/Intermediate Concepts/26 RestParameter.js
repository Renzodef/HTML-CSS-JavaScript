/*
Prior to ES6, if we wanted to pass a variable number of arguments to a function, 
we could use the arguments object, an array-like object, to access the parameters passed to the function.
For example, let's write a function that checks if an array contains all the arguments passed:
*/
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7)); // true
console.log(containsAll(x, 6, 4, 9)); // false

/*
While the code above does the job, ES6 provides a more readable syntax to 
achieve variable number of parameters by using a rest parameter.
The ...nums parameter is called a rest parameter. 
It takes all the "extra" arguments passed to the function. 
The three dots (...) are called the Spread operator.
*/
function containsAll2(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
console.log(containsAll2(x, 2, 4, 7)); // true
console.log(containsAll2(x, 6, 4, 9)); // false

// Another example:
function magic(...nums) {
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6)); // 12