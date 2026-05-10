setTimeout(() => console.log("A"), 1000);

setTimeout(() => console.log("B"), 0);

console.log("C");

//console.log("A") enters macrotask queue
//console.log("B") eneters macrotask queue
//console.log("C") is being executed immmidiatly
//B is being printed because it has to wait 0 seconds
//then A is being printed out because it had to wait for 2 seconds