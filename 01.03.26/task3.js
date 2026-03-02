function minInArray(arr) {
    if(arr.length === 0){
        return "The array is empty!";
    } 
    var smallest = arr[0];
    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

var arr1 = [45, 12, 20, -45];
var arr2 = [];

console.log(minInArray(arr1));
console.log(minInArray(arr2));