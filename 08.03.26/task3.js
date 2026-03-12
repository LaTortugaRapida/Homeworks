function filter(array, callback) {    var new_arr = [];

    for(var index in array) {
        if(callback(array[index], index, array)) {
            new_arr.push(array[index]);
        };
    }

    return new_arr;
}

function negElem(currentValue, index, array) {
    if(currentValue < 0) return true;
    return false;
}

var arr = [0, -1, 2, -3, -4, 5];
console.log(filter(arr, negElem));