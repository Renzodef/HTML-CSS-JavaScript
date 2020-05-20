/*
Create a file named http-collect.js.
Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Collect all data from the server (not
just the first "data" event) and then write two lines to the console
(stdout).
The first line you write should just be an integer representing the number
of characters received from the server. The second line should contain the
complete String of characters sent by the server.
*/
// You can change 'http' with 'https' to do requests
// if the site has https
const http = require('http');
// Passing the url as the first command-line argument
const url = process.argv[2];
http.get(url, (request) => {
  let result = '';
  request.setEncoding('utf8');
  request.on('data', (data) => {
    result += data;
  });
  request.on('end', () => {
    // Number of characters receiver from the server
    console.log(result.length);
    // Writing the strings of the content received from the server
    console.log(result);
  });
});
// Example launching from the command line:
// node "08 http-collect.js" http://www.animeclick.it/
