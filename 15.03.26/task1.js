function curry(cb) {
    let sizeOfCb = cb.length;
    let cbArgs = [];

    return function cruied(...args) {
        cbArgs.push(...args);
        if(cbArgs.length >= sizeOfCb) {
            let res = cb(...cbArgs);
            cbArgs.length = 0;
            return res;
        }
        return cruied;
    }
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); 
console.log(sumFunc(1, 2)(3)); 
console.log(sumFunc(1, 2, 3));  
console.log(prodFunc(1, 2, 3, 4));   
console.log(prodFunc(1)(2, 3, 4));  
console.log(prodFunc(1, 2)(3, 4));  
console.log(prodFunc(1, 2, 3)(4)); 