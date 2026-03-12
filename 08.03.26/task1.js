function forEach(array, callback) {
    for(var index in array) {
        callback(array[index], index, array);
    }
    return undefined;
}

function elemMulByVal(currentValue, index, array) {
    array[index] *= currentValue;
}

var arr = [1, 2, 3, 4, 5, 6];
forEach(arr, elemMulByVal);

console.log(arr);