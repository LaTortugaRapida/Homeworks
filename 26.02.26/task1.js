let str = "Hello World!";

function lengthStr(str){
    let length = 0;
    for(let n of str)   {
        length++;
    }
    
    return length;
}

console.log("The length of the string was", lengthStr(str),"!");
