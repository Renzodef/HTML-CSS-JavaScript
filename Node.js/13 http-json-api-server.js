/*
Create a file named http-json-api-server.js.
Write an HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'. Expect the request to contain a query string
with a key 'iso' and an ISO-format time as the value.
For example:
/api/parsetime?iso=2013-08-10T12:10:15.474Z
The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:
     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }
Add second endpoint for the path '/api/unixtime' which accepts the same
query string but returns UNIX epoch time in milliseconds (the number of
milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
For example:
     { "unixtime": 1376136615474 }
Your server should listen on the port provided by the first argument to
your program.
  */
const http = require('http');
const url = require('url');
// Function to return the hour, minute and second
function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}
// Function to return the UNIX epoch time in milliseconds
function unixtime(time) {
  return { unixtime: time.getTime() };
}
// Server creation
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);
  let result;
  if (/^\/api\/parsetime/.test(req.url)) result = parsetime(time);
  else if (/^\/api\/unixtime/.test(req.url)) result = unixtime(time);
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
// Passing the port as first command-line argument
const port = process.argv[2];
// Server creation
server.listen(Number(port));
console.log('Server listening on http://localhost:%s', port);
// Example launching from the command line:
// node "13 http-json-api-server.js" 8000
// Then send a GET request to the server from terminal with:
// curl http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z
// and you will receive the JSON response returning hour, minute and second
// Send another GET request to the server from terminal with:
// curl http://localhost:8000/api/unixtime/?iso=2013-08-10T12:10:15.474Z
// and you will receive the JSON response returning the UNIX epoch time in milliseconds
