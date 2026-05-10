/*
What is Call Stack
What is Web API
What is Macrotask Queue
What is Microtask Queue
What is Event Loop
*/

//---------- Call stack ----------
/*
Call stack is where JS keeps track of what is currently being executed,
it works in LIFO principle
*/

//---------- Web API ----------
/*
Those are external interfaces provided by the environment, 
i.e. when we call asynchronous function like setTimeout
the JavaScript engine offloads that operation to the Web API
which handles the timing or the network request in the background
*/

//---------- Macrotask Queue ----------
/*
The Macrotask Queue holds callbacks from Web APIs 
once their background work is complete.
These tasks are processed one at a time, 
and only after the Microtask Queue is completely empty
it works in FIFO principle
*/

//---------- Microtask Queue ----------
/*
The Microtask Queue is a high-priority queue 
specifically for Promises.
After the Call Stack finishes the engine checks this queue.
It will execute every task in the Microtask Queue 
before moving on to the next Macrotask.
it works in FIFO principle
*/

//---------- Event Loop ----------
/*
Event Loop continuously monitors the Call Stack and the queues.
If the Call Stack is empty, it first processes all available Microtasks. 
Once the Microtask Queue is empty, 
it takes the oldest Macrotask from the Macrotask Queue 
and pushes it onto the Call Stack
*/