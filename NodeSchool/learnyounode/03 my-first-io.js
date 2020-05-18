/*
Create a file named my-first-io.js.
Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines (\n) it contains to the
console (stdout), similar to running cat file | wc -l.
The full path to the file to read will be provided as the first
command-line argument (i.e., process.argv[2]). You do not need to make
your own test file, just use:
learnyounode run my-first-io.js
and a default file will be passed as the first command-line argument.
*/
// The Node.js file system module allows you to work
// with the file system on your computer.
const fs = require('fs');
// Passing the file as the first command-line argument
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8')
const file = fs.readFileSync(process.argv[2]).toString();
// The next line will assign to lines
// the number of newlines
// We use lenght-1 so we won't count the newline in the last line
const lines = file.split('\n').length - 1;
console.log(lines);
