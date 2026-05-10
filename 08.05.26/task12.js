console.log("1");

setTimeout(() => {
 console.log("2");
}, 0);
Promise.resolve().then(() => {
 console.log("3");
});

console.log("4");
//immidiatly executes first console.log, ptints 1
//adds second c.l in macrotask queue
//adds third c.l inti microtasks
//fourth c.l eneters stack, 4 is printed out
//adds th c.l from microtasks into stack, executes, 3 is printed out
//adds th c.l from macrotasks into stack, executes, 2 is printed out