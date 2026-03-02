function countDigits(n) {
    if(n === 0) return 1;
    var count = 0;
    while(n) {
       n = Math.trunc(n /= 10);
        count++;
    }

    return count;
}

console.log("Number 1984 has", countDigits(1984), "digits!");