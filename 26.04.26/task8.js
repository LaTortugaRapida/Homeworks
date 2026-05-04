let cache = new WeakMap()
function  heavyCalc(obj) {
    if(cache.has(obj)){
        return cache.get(obj) * 10;
    }
    for(let i = 0; i < 8_000_000_000; ++i) {}
    cache.set(obj, obj.value);
    return "first call";
}

// Input
const dataObj = { value: 10 };

// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100