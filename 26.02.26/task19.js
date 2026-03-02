function sumOfNums(val1, val2){
    if((typeof val1 !== "number" || typeof val2 !== "number")) {
        return "Invalid input";
    }
    return val1 + val2;
 }

 console.log(sumOfNums(null, 45));
 console.log(sumOfNums(0.25, 45));
 console.log(sumOfNums("456", 45));