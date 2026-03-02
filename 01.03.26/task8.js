function removeFirstChar(str){
    var str2 = "";
    if (str.length > 1) {
        for(var i = 1; i < str.length; ++i) {
            str2 += str[i];
        }
    }

    return str2;
}

console.log(removeFirstChar("Helloo"));