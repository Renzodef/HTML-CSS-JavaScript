/*
A Map object can be used to hold key/value pairs. 
A key or value in a map can be anything (objects and primitive values).
The below example demonstrates some of the ES6 Map methods.
*/
let map = new Map();

map.set('k1', 'v1').set('k2', 'v2');

console.log(map.size); // 2

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);