/*
Spread in array literals
Before ES6, we used the following syntax to add an item at middle of an array:
*/
var arr = ["One", "Two", "Five"];
arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr); // [ 'One', 'Two', 'Three', 'Four', 'Five' ]
/*
You can use methods such as push, splice, and concat,
for example, to achieve this in different positions of the array. 
*/

/*
However, in ES6 the spread operator lets us do this more easily:
*/
let newArr = ['Three', 'Four']; 
let arr2 = ['One', 'Two', ...newArr, 'Five'];
console.log(arr2); // [ 'One', 'Two', 'Three', 'Four', 'Five' ]
