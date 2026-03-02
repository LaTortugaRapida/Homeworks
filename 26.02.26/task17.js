function isPlainObj(val) {
    if(Array.isArray(val) || (typeof val === "function") || val === null || (typeof val !== "object")){
        return false;
    }

    return true;
}

console.log( isPlainObj([1, 2]));
console.log( isPlainObj(45));
console.log( isPlainObj(null));
console.log( isPlainObj(isPlainObj));
console.log( isPlainObj(globalThis));