let str = "This is a string!";

function strToUppercase(str) {
    let UpStr = "";
   for(let i = 0; i < str.length; ++i) {

        if(str[i] >= "a" && str[i] <= "z") {
            UpStr += String.fromCharCode(str.charCodeAt(i) - 32);
        } else {
            UpStr += str[i];
        }
    }
   return UpStr;
}

console.log(strToUppercase(str));

