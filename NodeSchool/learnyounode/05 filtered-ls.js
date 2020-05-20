/*
Create a file named filtered-ls.js.
Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a directory
name as the first argument to your program (e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.
For example, if you get 'txt' as the second argument then you will need to
filter the list to only files that end with .txt. Note that the second
argument will not come prefixed with a '.'.
Keep in mind that the first arguments of your program are not the first
values of the process.argv array, as the first two values are reserved for
system info by Node.
The list of files should be printed to the console, one file per line. You
must use asynchronous I/O.
*/
// Importing the modules
const fs = require('fs');
const path = require('path');
// Passing the directory as the first command-line argument
const dirpath = process.argv[2];
// Passing the extension as the second command-line argument
const ext = `.${process.argv[3]}`;
// Function to print only the files of the directory
// with the desired extension
fs.readdir(dirpath, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
// Example launching from the command line:
// node "05 filtered-ls.js" Folder txt
// Where txt is the extension you want
// If Folder is in the same folder of the .js file
// If it isn't provide the full path
