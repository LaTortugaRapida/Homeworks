const products = [
    { name: 'Apples', price: 3000 },
    { name: 'Bananas', price: 400 },
    { name: 'Candies', price: 1200 }
];

let expencive = products.filter(item => item.price > 1000);
console.log(expencive);