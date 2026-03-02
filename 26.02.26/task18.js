function isPrimitiveType(val){
    if(val === null) return true;
    if((typeof val === "object") || (typeof val === "function") || (Array.isArray(val))) {
        return false;
}
return true;
}

console.log(isPrimitiveType(null));
console.log(isPrimitiveType("Hi"));
console.log(isPrimitiveType([1, 2]));
console.log(isPrimitiveType(isPrimitiveType));
console.log(isPrimitiveType(globalThis));