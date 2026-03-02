function power(base, exp) {
    if(exp === 0 ) return 1;
    if(base === 0) return 0;
    if(base < 0) base *= -1;

    var res = 1;
    while(exp) {
        res *= base;
        exp--;
    }
    return res;
}

console.log(power(0, 0));
console.log(power(3, 4));