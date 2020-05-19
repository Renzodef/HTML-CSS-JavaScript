/*
Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through2` module.
To get the `through2` module you'll need to do:
npm install through2
*/
const through = require('through2');
// Function to convert the streaming input in upper cases
// eslint-disable-next-line func-names
const tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});
// Applying the function to the pipe and output it
process.stdin.pipe(tr).pipe(process.stdout);
