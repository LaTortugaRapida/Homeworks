Function.prototype.myCall = function (thisArg, ...args) {
    if(thisArg === null || thisArg === undefined) {
        thisArg = globalThis;
    }

    thisArg = Object(thisArg);

    let mcll = Symbol('mcll')
    thisArg[mcll] = this;
    let res = thisArg[mcll](...args);
    delete thisArg[mcll];

    return res;
}

function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

function sayHi() {
    return `Hi, I'm ${this.name}`;
}

const user1 = { name: 'Jane' };

function add(a, b) {
    console.log(this);
    return a + b;
}

console.log(showInfo.myCall(user, "New-York", "USA"));
console.log(sayHi.myCall(undefined));
console.log(add.myCall(null, 2, 3));
console.log(add.myCall());

