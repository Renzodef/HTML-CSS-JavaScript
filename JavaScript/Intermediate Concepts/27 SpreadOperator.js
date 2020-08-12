/*
The Spread Operator
This operator is similar to the Rest Parameter, 
but it has another purpose when used in objects or arrays or function calls (arguments).
*/

/*
Spread in function calls
It is common to pass the elements of an array as arguments to a function. 
Before ES6, we used the following method:
*/
function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4)); // 10

// ES6 provides an easy way to do the example above with spread operators:
const myFunction2 = (w, x, y, z) => {
  console.log(w + x + y + z);
};
let args2 = [1, 2, 3];
myFunction2(...args2, 4); // 10

// An example applied to Date:
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date); // 1969-12-31T23:00:00.000Z
