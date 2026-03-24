function memorize(cb) {
    let caches = {};

    return function cache(arg) {
        if(arg in caches) {
            return cache[arg];
        }

        let res = cb(arg);
        cache[arg] = res;
        return res;
    };
}

function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

const foo = memorize(factorial);
console.log(foo(5)); 
console.log(foo(5)); 