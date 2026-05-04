// Input
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

let iterator = mixedMap.entries();
while(true){
    let cur = iterator.next();
    if(cur.done === true) {
        break
    }
    let [key, val] = cur.value;
    if(typeof val === "string") console.log(cur.value); 
}

// Expected Output in console
// [1, 'num']
// ['str', 'text']