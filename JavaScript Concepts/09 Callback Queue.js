// JavaScript is an asynchronous language
// 2 will be printed after 0 ms
// but anyway after the 3
// This is because setTimeout (and alert and others functions)
// are browser components called Web Api
// So a console log with timeout will be executed after the other outputs
// because it is put in a different queue called Calleback Queue 
console.log(1)
setTimeout(() => console.log(2), 0)
console.log(3)

/*
Output:
1
3
2
*/