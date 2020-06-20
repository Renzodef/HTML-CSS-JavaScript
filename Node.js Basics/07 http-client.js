/*
Create a file named http-client.js.
Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Write the String contents of each
"data" event from the response to a new line on the console (stdout).
*/
// You can change 'http' with 'https' to do requests
// if the site has https
const http = require('http');
// Passing the url as the first command-line argument
const url = process.argv[2];
// Writing the strings of the content received from the server
http.get(url, (request) => {
  request.setEncoding('utf8');
  request.on('data', (data) => {
    console.log(data);
  });
});
// Example launching from the command line:
// node "07 http-client.js" http://www.animeclick.it/
