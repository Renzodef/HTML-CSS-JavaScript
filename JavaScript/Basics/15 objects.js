/*
Create a file named objects.js.
In that file, define a variable named pizza like this:
const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
Use console.log() to print the pizza object to the terminal.
*/
const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2,
};
console.log(pizza);

// Similar to Array destructuring, Object destructuring unpacks properties into distinct variables.
let obj = {h:100, s: true};
let {h, s} = obj;
console.log(h); // 100
console.log(s); // true
// You can also assign the object to new variable names.
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;
//console.log(h); // Error
console.log(foo); // 42
// Finally you can assign default values to variables, in case the value unpacked from the object is undefined.
var obj2 = {id: 42, name: "Jack"};
let {id = 10, age = 20} = obj2;
console.log(id); // 42
console.log(age); // 20