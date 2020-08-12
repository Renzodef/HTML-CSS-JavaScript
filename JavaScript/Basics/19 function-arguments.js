/*
Create a file named function-arguments.js.
In that file, define a function named math that takes three arguments.
It's important for you to understand that arguments names are only used to reference them.
Name each argument as you like.
Within the math function, return the value obtained from multiplying the
second and third arguments and adding that result to the first argument.
After that, inside the parentheses of console.log(), call the math()
function with the number 53 as first argument, the number 61 as second and
the number 67 as third argument.
*/
function math(x, y, z) {
  return x + (y * z);
}
console.log(math(53, 61, 67));

// In ES6, we can put the default values right in the signature of the functions.
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5));