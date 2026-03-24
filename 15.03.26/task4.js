function trace(cb) {

    function wrapper(...cb_args) {
        let args = cb_args.slice(0, cb.length);
        let output = cb(...args);
        wrapper.history.push({args, output});
        return output;
    }

    wrapper.history = [];
    return wrapper;
}

function foo(a, b) {
 return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6

console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]