console.log("Start");//console log enters the stack, happens immmidiatly, 

setTimeout(() => {
 console.log("Timeout");//since setTimeout is a macrotask it enters macrotask queue
}, 0);                  //and waits for its turn to enter the stack

console.log("End");     //enters stack right after, it happens after the first console.log