function sumOfThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

let nums = [10, 20, 30];

console.log(sumOfThree.apply(null, nums));
