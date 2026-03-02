function sumUpTo(n) {
    var sum = 0;
    for(var i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum
}

console.log("Sum of numbers from 1 to 10:", sumUpTo(10));