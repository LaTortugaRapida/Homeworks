function toBoolean(val){
    return !(!val);
}

console.log(toBoolean(""), toBoolean("Hello"), toBoolean(null), toBoolean(NaN));