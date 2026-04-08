let users = [
    {name: "Ann", age: 10},
    {name: "Ben", age: 15}, 
    {name: "Carter", age: 19}
];

let adults = users.filter(user => user.age >= 18).map(user => user.name);
console.log(adults);