const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 2000);
});

promise.then((msg) => {console.log(msg);})