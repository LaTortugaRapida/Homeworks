function firstAndLast(arr) {
    var arr2 = [];
    if(arr.length === 0) return arr2;
    if(arr.length === 1) {
        arr2[0] = arr[0];
    } else {
        arr2[0] = arr[0];
        arr2[1] = arr[arr.length - 1];
    }
    return arr2
}

console.log(firstAndLast([1, 2, 3]));
console.log(firstAndLast([5]));
console.log(firstAndLast([]));