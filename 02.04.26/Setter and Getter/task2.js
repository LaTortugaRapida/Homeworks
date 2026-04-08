class Accaunt {
    constructor(password) {
        this.password = password;
    }

    get password() {
        return this._password;
    }
    set password(value) {
        if(value.toString().length > 6) {
            this._password = value;
        } else {
            console.log("Password too short!");
        }
    }

}

let acc = new Accaunt(15);
acc.password = 123456789;
console.log(acc.password);