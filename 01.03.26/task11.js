function repeatString(str, n) {
    if(n === 0) return "";

    var repstr = "";
    while(n) {
        repstr += str;
        n--;
    }

    return repstr;
}

console.log(repeatString("ha", 3));
console.log(repeatString("hi", 0));