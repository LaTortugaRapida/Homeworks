function sumArray(arr) {
    if(arr.length === 0){
        return "The array is empty!";
    }

    var sum = 0;
    for(var i = 0; i<arr.length; ++i) {
        sum += arr[i];
    }

    return sum;
}

var numbers = [10, 20 , 30]
var empty = [];

console.log(sumArray(numbers), sumArray(empty));