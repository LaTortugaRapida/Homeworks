function some(array, callback) {
    for(var index in array) {
        if(callback(array[index], index, array)) return true;
    }

    return false;
}

function notNeg(currentValue, index, array)
{
    if(currentValue >= 0) return true;
    return false;
}

var arr = [0, -1, -2, -3, -4, -5];
console.log(some(arr, notNeg));