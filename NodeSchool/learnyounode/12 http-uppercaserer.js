/*
Create a file named http-uppercaserer.js.
Write an HTTP server that receives only POST requests and converts
incoming POST body characters to upper-case and returns it to the client.
Your server should listen on the port provided by the first argument to
your program.
*/
const http = require('http');
// npm install through2-map
const map = require('through2-map');
// Function that convert the POST requests in upper-case
// eslint-disable-next-line consistent-return
const server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end('send me a POST request\n');
  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});
// Passing the port as first command-line argument
const port = process.argv[2];
// Server creation
server.listen(Number(port));
console.log('Server listening on http://localhost:%s', port);
// Example launching from the command line:
// node "12 http-uppercaserer.js" 8000
// Then go in the browser to:
// localhost:8000
// And you will see "send me a POST request"
// To send a POST request to the server
// go in the terminal and type:
// curl -i -X POST -d "show me this example" http://localhost:8000
// Then you'll see in the terminal the upper-case transformation
// of the word or sentence sent as POST request
