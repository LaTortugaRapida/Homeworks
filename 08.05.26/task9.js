const promise = new Promise((resolve, reject) => {
    reject("Server Error");
});

promise
    .catch((err) => {console.log(err);})
