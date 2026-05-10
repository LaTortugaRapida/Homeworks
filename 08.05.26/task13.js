console.log("A");

Promise.resolve().then(() => {
 console.log("B");
});

Promise.resolve().then(() => {
 console.log("C");
});

setTimeout(() => {
 console.log("D");
}, 0);

console.log("E");

// first c.l("A") enters stack, A is printed out immidiatly
// console.log("B") eneters microtask queue
// console.log("C") eneters microtask queue
// console.log("D") eneters macrotask queue
// console.log("E") eneters stack, E is printed out
// B is printed out since console.log("B") is in microtask queue
//           which works FIFO 
// C is printed out since console.log("B") is in microtask queue
// D is printed out since console.log("B") is in macrotask queue
// and microtask queue is free
