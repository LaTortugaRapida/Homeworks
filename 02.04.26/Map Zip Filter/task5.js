let users = [
    {name: "A", age: 10}, 
    {name: "B", age: 15}, 
    {name: "C", age: 19}
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);