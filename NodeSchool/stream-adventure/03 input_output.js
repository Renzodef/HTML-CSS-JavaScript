/*
Take data from `process.stdin` and pipe it to `process.stdout`.
With `.pipe()`. `process.stdin.pipe()` to be exact.
Don't overthink this.
*/
// This will take as input from terminal after launching the script
// all the inputs and output them
process.stdin.pipe(process.stdout);
