class Email {
    _email;
    constructor(email) {
        this.email = email;
    }

    set email(value) {
        if(value.includes("@")) {
            this._email = value;
        } else {
            throw new Error("Email should contain @!")
        }
    }

    get email() {
        return this._email;
    }     
}

let myEmail = new Email("test@test.com");
console.log(myEmail.email);