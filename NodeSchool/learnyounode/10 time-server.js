/*
Create a file named time-server.js.
Write a TCP time server!
Your server should listen to TCP connections on the port provided by the
first argument to your program. For each connection you must write the
current date & 24 hour time in the format:
"YYYY-MM-DD hh:mm"
followed by a newline character. Month, day, hour and minute must be
zero-filled to 2 integers. For example:
"2013-07-06 17:42"
After sending the string, close the connection.
*/
const net = require('net');
// This is to respect the format
// We need to zero fill our results
// That means 7:00 should be presented as 07:00.
function zeroFill(i) {
  // condition ? 'expression if true' : 'expression if false'
  return (i < 10 ? '0' : '') + i;
}
// Getting the current date, hour, etc.
function now() {
  const d = new Date();
  return `${d.getFullYear()}-${
    zeroFill(d.getMonth() + 1)}-${
    zeroFill(d.getDate())} ${
    zeroFill(d.getHours())}:${
    zeroFill(d.getMinutes())}`;
}
const server = net.createServer((socket) => {
  // Adding the new line character
  socket.end(`${now()}\n`);
});
// Passing the port as first command-line argument
const port = process.argv[2];
// Server creation
server.listen(Number(port));
console.log('Server listening on http://localhost:%s', port);
// Example launching from the command line:
// node "10 time-server.js" 8000
// Then go in the browser to:
// localhost:8000
// If you are on Windows and the localhost
// doesn't work on Chrome, try with Firefox or with other browsers
