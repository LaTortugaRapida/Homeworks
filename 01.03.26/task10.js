function contains(arr, value) {
    if(arr.length === 0) {
        return "The array has no elements!";
    }

    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(contains([1, 2, 3], 2));
console.log(contains([1, 2, 3], 5));