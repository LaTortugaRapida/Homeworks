function toNumber(val){
    var num = Number(val);
    if(Number.isNaN(num)) return null
    else return num;
}

val1 = "Letters";
val2 = "598.45";

console.log(toNumber(val1), toNumber(val2));