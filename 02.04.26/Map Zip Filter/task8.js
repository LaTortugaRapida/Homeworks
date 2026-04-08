let nums = [0, 10, 20, 30, 45];

let evenSqr = nums.filter(num => num % 2 === 0 && num != 0).map(num => num**2);
console.log(evenSqr);