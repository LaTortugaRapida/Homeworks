function isNumber(val)
{
    if ((typeof val === "number") && !(Number.isNaN(val))) {
        if ((Number.isFinite(val) && Number.isSafeInteger(val))) {
            return true;
        }
    }
return false;
}

console.log(isNumber(NaN));
console.log(isNumber(999999999999999999));
console.log(isNumber("Hello"));
console.log(isNumber(404));