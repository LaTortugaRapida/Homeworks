function mapToJson(map) {
    let arr = Array.from(map.entries());
    return JSON.stringify(arr);
}

function jsonToMap(json) {
    let arr = JSON.parse(json); 
    return new Map(arr);
}

// Input
const myMap = new Map([['a', 1], ['b', 2]]);

// Expected Output
const jsonStr = mapToJson(myMap);
console.log(jsonStr); 
// '{"a":1,"b":2}' OR '[["a",1],["b",2]]' (depends on implementation)

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap); 
// Map(2) { 'a' => 1, 'b' => 2 }