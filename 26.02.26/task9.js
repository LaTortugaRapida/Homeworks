let numbers = [100, 8, 20, 36];

function elemSum(arr){
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }

    return sum;
}

console.log("Sum of elemets of the array is",  elemSum(numbers));