/*
Create a file named object-keys.js.
In that file, define a variable named car like this:
const car = {
 make: 'Honda',
 model: 'Accord',
 year: 2020
}
Then define another variable named keys like this:
const keys = Object.keys(car)
Use console.log() to print the keys variable to the terminal.
Check to see if your program is correct by running this command:
javascripting verify object-keys.js
*/
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020,
};
// Assigning to a variable
// the keys of he object car
const keys = Object.keys(car);
console.log(keys);
