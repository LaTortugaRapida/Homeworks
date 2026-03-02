let nullval = null;
let arr = [];

function elemSum(arr) {

    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    return sum;
}

function getType(value) {
    if (value === null) return "null";          
    if (Array.isArray(value)) return "array";   
    return typeof value;                          
}

console.log(getType(nullval));
console.log(getType(elemSum));
console.log(getType(arr));
