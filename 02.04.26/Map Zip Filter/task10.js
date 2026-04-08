function adultInfo(users) {
    let adults  = users.filter(user => user.age >= 18);
    return adults.map(user => `${user.name} is ${user.age} years old`).toString();
}


let users = [
    { name: "Anna", age: 17 },
    { name: "John", age: 20 },
];

console.log(adultInfo(users));
