/*
Create a file named arrays.js.
In that file define a variable named pizzaToppings that references an
array that contains three strings in this order: tomato sauce, cheese, pepperoni.
Use console.log() to print the pizzaToppings array to the terminal.
*/
const pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);

// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// ES6 has added a shorthand syntax for destructuring an array.
let arr = ['1', '2', '3'];
let [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// The destructuring syntax also simplifies assignment and swapping values:
let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6
[c, d] = [d, c]; // c = 8, d = 4
