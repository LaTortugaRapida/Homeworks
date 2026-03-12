function every(array, callback) {
        for(var index in array) {
        if(!(callback(array[index], index, array))) return false;
    }
    return true;
}

function isPositive(currentValue, index, array) {
    if(currentValue > 0) return true;
    return false;
}

var arr = [1, 2, 3, 4, 5];
console.log(every(arr, isPositive));