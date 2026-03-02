let val1 = "8";
let val2 = 8;

function valCmp(val1, val2) {
    const cmpRes = {
        loose_eql: val1 == val2,
        strict_eql: val1 === val2
    }
    
    return cmpRes;
}

console.log(valCmp(val1, val2));