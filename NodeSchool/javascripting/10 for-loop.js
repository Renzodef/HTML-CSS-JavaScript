/*
Create a file named for-loop.js.
In that file define a variable named total and make it equal the number 0.
Define a second variable named limit and make it equal the number 10.
Create a for loop with a variable i starting at 0 and increasing by 1 each
time through the loop. The loop should run as long as i is less than limit.
On each iteration of the loop, add the number i to the total variable.
To do this, you can use this statement:
total += i
When this statement is used in a for loop, it can also be known as an accumulator.
Think of it like a cash register's running total while each
item is scanned and added up.
For this challenge, you have 10 items and
they just happen to be increasing in price by 1 each item (with the first item free!).
After the for loop, use console.log() to print the total variable to the terminal.
Check to see if your program is correct by running this command:
javascripting verify for-loop.js
*/
let total = 0;
const limit = 10;
for (let i = 0; i < limit; i += 1) {
  total += i;
}
console.log(total);
