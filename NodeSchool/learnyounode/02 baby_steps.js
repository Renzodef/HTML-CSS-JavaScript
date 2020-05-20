// Create a file named baby-steps.js.
// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).
let result = 0;
// They cicle start with i = 2 because in Node.js
// the first 2 arguments of process.argv are for example:
// 'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\renzo\\Documents\\GIT\\Prova\\2.js'
// So if we put i = 0
// the output will be NaN
for (let i = 2; i < process.argv.length; i += 1) {
  result += Number(process.argv[i]);
}
console.log(result);
// Example launching from the command line:
// node "02 baby_steps.js" 2 3 4
