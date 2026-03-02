let str1 = "This is a string!"
let str2 = "string"

function SubStr(str1, str2)
{
    let j = 0;
    let count = 0;
    for(let i = 0; i < str1.length; ++i) {   
        if(str1[i] === str2[j]) {
                count++;
                j++;
                if(count === str2.length) return true;
            } else {
                j = 0;
                count = 0;
            }  
    } return false;
}

if(SubStr(str1, str2)) {
        console.log("yes!");
    } else {
        console.log("no!");
    }