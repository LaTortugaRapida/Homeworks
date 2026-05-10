console.log("Start");

setTimeout(() => {
 console.log("Timeout 1");

 Promise.resolve().then(() => {
   console.log("Promise inside timeout");
 });
}, 0);

Promise.resolve().then(() => {
 console.log("Promise 1");
});

setTimeout(() => {
 console.log("Timeout 2");
}, 0);

console.log("End");

//"Start" is printed out, since console.log("Start") synchronous
// console.log("Timeout 1") eneters macrotask queue
// console.log("Promise inside timeout") enters microtask queue
// console.log("Promise 1") enters microtask queue
//console.log("Timeout 2") eneters macrotask queue
// "End" is printed out, since console.log("End") is synchronous
//"Promise 1" is printed out since it enetered microtask queue first
//"Promise 2" is printed out
//"Timeout 1" is printed out since it enetered macrotask queue first
//"Promise inside timeout" is printed out since it is inside a macrotask, and microtask queue should be emptied before moving to the next Macrotask.
//then "Timeout 2" is printed out