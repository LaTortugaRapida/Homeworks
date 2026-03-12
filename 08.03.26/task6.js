function indexOf(array, searchElement) {
        for(var i = 0; i < array.length; i++) {
        if(array[i] === searchElement) return i;
    }

    return -1;
}

var arr = [1, 2, 3, 4, 5];
console.log(indexOf(arr, 3));