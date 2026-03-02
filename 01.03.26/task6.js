function average(arr) {
    if(arr.length === 0){
        return "The array is empty!";
    }

    var avg = 0; 
    for(var i = 0; i < arr.length; ++i) {
        avg += arr[i];
    }

    avg = avg/arr.length;
    return avg;
}
var numbers = [10, 20 , 30]
var empty = [];

console.log(average(numbers), average(empty));