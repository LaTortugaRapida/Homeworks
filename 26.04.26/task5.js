function filterSpam(text, badWordsArray) {
    let setBadWords = new Set(badWordsArray);
    let setText = new Set(text.split(" "));
    let res = [];

    for(let w of setText) {
        if(setBadWords.has(w)) {
            res.push("***");
        } else {
            res.push(w);
        }
    }

    return res.join(" ");
}



// Input
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"