let digits = [1, 2, 3];

let extraNumbers = {
    0 : "Hi",
    1 : "Bye",
    length : 2,
    [Symbol.isConcatSpreadable]: true
}

let bonus = [4, 5]
bonus[Symbol.isConcatSpreadable] = false;

console.log(digits.concat(extraNumbers));
console.log(digits.concat(bonus)); //we overrided bonus array's default "spreadability"
                                // it can't be flattened now
                                //So this basically allows us to control
                                //the behavior of concat