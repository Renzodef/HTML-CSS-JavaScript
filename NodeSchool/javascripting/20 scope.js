/*
Create a file named scope.js.
In that file, copy the following code:
   const a = 1; const b = 2; const c = 3;

   (function firstFunction () {
     const b = 5; const c = 6;

     (function secondFunction () {
       const b = 8;

       (function thirdFunction () {
         const a = 7; const c = 9;

         (function fourthFunction () {
           const a = 1; const c = 8
         })()
       })()
     })()
   })()
Use your knowledge of the variables' scope and place the following code
inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6
console.log(`a: ${a}, b: ${b}, c: ${c}`)
Check to see if your program is correct by running this command:
javascripting verify scope.js
*/

// The following two lines will suppress the Eslint warning messagges
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const a = 1; const b = 2; const c = 3;

(function firstFunction() {
  const b = 5; const c = 6;

  (function secondFunction() {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction() {
      const a = 7; const c = 9;

      (function fourthFunction() {
        const a = 1; const c = 8;
      }());
    }());
  }());
}());
