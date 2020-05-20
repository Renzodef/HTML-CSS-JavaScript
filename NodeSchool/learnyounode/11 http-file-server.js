/*
Create a file named http-file-server.js.
Write an HTTP server that serves the same text file for each request it
receives.
Your server should listen on the port provided by the first argument to
your program.
You will be provided with the location of the file to serve as the second
command-line argument. You must use the fs.createReadStream() method to
stream the file contents to the response.
*/
const http = require('http');
const fs = require('fs');
// Passing the port as first command-line argument
const port = process.argv[2];
// Passing the file as first command-line argument
const file = process.argv[3];
// Server creation
http.createServer((request, response) => {
  fs.createReadStream(file).pipe(response);
}).listen(+port, () => {
  console.log('Server listening on http://localhost:%s', port);
});
// Example launching from the command line:
// node "11 http-file-server.js" 8000 Example.txt
// Example.txt need to be in the same folder of the .js file
// Or provide the full path if the file isn't in the same folder
// Then go in the browser to:
// localhost:8000
