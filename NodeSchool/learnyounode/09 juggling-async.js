/*
Create a file named juggling-async.js.
This problem is the same as the previous problem (HTTP COLLECT) in that
you need to use http.get(). However, this time you will be provided with
three URLs as the first three command-line arguments.
You must collect the complete content provided to you by each of the URLs
and print it to the console (stdout). You don't need to print out the
length, just the data as a String; one line per URL. The catch is that you
must print them out in the same order as the URLs are provided to you as
command-line arguments.
*/
const http = require('http');
// A Node.js Buffer list collector, reader and streamer thingy.
// npm install bl
const bl = require('bl');
// Variables to use alter
const results = [];
let count = 0;
// Printing results funcion
function printResults() {
  for (let i = 0; i < 3; i += 1) console.log(results[i]);
}
// Get http from command-line function
function httpGet(index) {
  http.get(process.argv[2 + index], (response) => {
    // eslint-disable-next-line consistent-return
    response.pipe(bl((err, data) => {
      if (err) return console.error(err);
      results[index] = data.toString();
      count += 1;
      if (count === 3) printResults();
    }));
  });
}
// Getting the 3 urls from command-line
for (let i = 0; i < 3; i += 1) httpGet(i);
// Example launching from the command line:
// node "09 juggling-async.js" http://www.animeclick.it/ http://myanimelist.net/ http://myanimelist.net/