/*
Create a file named my-first-async-io.js.
Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.
The full path to the file to read will be provided as the first
command-line argument.
*/
// The Node.js file system module allows you to work
// with the file system on your computer.
const fs = require('fs');
// Passing the file as the first command-line argument
// But we are passing it with an asynchronous operation
// so the console.log in this function will be printed
// at the end of the ouput if we had others console.log
// outside that function.
fs.readFile(process.argv[2], 'utf8', (error, data) => {
  if (error) throw error;
  const lines = data.split('\n').length - 1;
  console.log(lines);
});
