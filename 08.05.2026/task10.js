function pay(balance, amount){
    return new Promise((resolve, reject) => {
    if (amount <= balance) {
            resolve("Payment successful");
    } else {
            reject("Not enough money");
    }
    });
}

pay(1000, 300)
    .then((msg) => console.log("Success:", msg))
    .catch((err) => console.log("Error:", err));

pay(100, 150)
    .then((msg) => console.log("Success:", msg))
    .catch((err) => console.log("Error:", err));