/*
A Set object can be used to hold unique values (no repetitions are allowed).
A value in a set can be anything (objects and primitive values).
The below example demonstrates some of the ES6 Set methods.
*/
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

set.add(5).add(9).add(59).add(9);

console.log(set.size); // 5

console.log(set.has(9)); // true

for (let v of set.values())
  console.log(v);