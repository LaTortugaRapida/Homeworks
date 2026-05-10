console.log("1");

setTimeout(() => {
 console.log("2");

 Promise.resolve().then(() => {
   console.log("3");
 });

}, 0);

Promise.resolve().then(() => {
 console.log("4");
});

console.log("5");

setTimeout(() => {
 console.log("6");
}, 0);


/*
console.log("1") enters call stack, 1 is being printed out
setTimeout 1 (callback with "2" and "3") enters macrotask queue
Promise 4 enters microtask queue
console.log("5") enters call stack, 5 is being printed out
setTimeout 2 (callback with "6") enters macrotask queue

4 is being printed out since microtask queue is cleared before macrotasks

the first macrotask (Timeout 1) enters call stack
2 is being printed out
Promise 3 enters microtask queue

3 is being printed out because microtask queue must be empty before the next macrotask starts

6 is being printed out since it's the next macrotask in the queue
*/