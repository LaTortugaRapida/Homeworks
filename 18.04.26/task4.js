let account = {
    balance : 200,
    currency : "euro",

    [Symbol.toPrimitive](hint) {
        if(hint  === 'number') {return this.balance;}
        if(hint === 'string') {return `Account Balance: ${this.balance} ${this.currency}`};
        return this.balance;
    }
}

console.log(+account);
console.log(String(account));
console.log(account + 500);

//we override JS's default conversion by Symbol.toPrimitive
//and now we control object's behavior(arithmetics and conversion)