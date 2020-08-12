// Creating the object renzo
let renzo = {
    grades: [8, 9, 9],
};
// Creating the function add
function add() {
    // Map function uset to add 1 to each grade
    // Map can be used only with arrow functions
    return this.grades.map(grade => grade + 1);
};
// Assigning the "this" in the function add to the object renzo
let added = add.call(renzo);
// Printing the result
console.log(added);

/*
Output:
[ 9, 10, 10 ]
*/