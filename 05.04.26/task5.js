Array.prototype.mySum = function() {
    let len = this.length;
    if(len === 0) return 0;
    let sum = 0;
    for(let i = 0; i < len; ++i) {
        if(typeof this[i] !== "number" || this[i] === NaN || this[i] === Infinity) {
            throw new Error("Array must contain only numbers!")
        }

        sum += this[i];
    }

    return sum;
}

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error