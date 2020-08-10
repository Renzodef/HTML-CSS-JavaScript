/*
Create a file named looping-through-arrays.js.
In that file, define a variable named pets that references this array:
['cat', 'dog', 'rat']
Create a for loop that changes each string in the array so that they are plural.
You will use a statement like this inside the for loop:
pets[i] = pets[i] + 's'
After the for loop, use console.log() to print the pets array to the terminal.
*/
const pets = ['cat', 'dog', 'rat'];
for (let i = 0; i < pets.length; i += 1) {
  // same as:
  // pets[i] = pets[i] + 's'
  pets[i] = `${pets[i]}s`;
}
console.log(pets);
