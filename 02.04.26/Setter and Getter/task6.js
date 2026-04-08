class BankAccount {
    _balance
    constructor() {
        this._balance = 0;
    }

    set deposit(value) {
        if(value > 0) {
           this._balance += value; 
        } else {
            throw new Error("deposit value can't be negative!");
        }
    }

    get balance() {
        return this._balance;
    }
}

let account = new BankAccount();
account.deposit = 100;
console.log(account.balance);