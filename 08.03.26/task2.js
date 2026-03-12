function map(array, callback) {
    var new_arr = [];

    for(var index in array) {
       new_arr.push(callback(array[index], index, array));
    }

    return new_arr;
}

function elemAddFive(currentValue, index, array) {
    return currentValue += 5;
}

var arr = [0, 1, 2, 3, 4];
console.log(map(arr, elemAddFive));
