function pipe(...funcs) {
    let functions = [...funcs];

    return function pass(num) {
        let len = functions.length;
        let res = num;

        for(let i = 0; i < len; ++i) {
            res = functions[i](res);
        }
        return res;
    };
 }


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));