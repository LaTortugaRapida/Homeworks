Function.prototype.myBind = function(thisArg, ...args) {
    if(thisArg === undefined || thisArg === null) {
        thisArg = globalThis;
    }

    thisArg = Object(thisArg);

    let mbnd = this;

    return function (...newArgs) {
        let mcll = Symbol("call");
        thisArg[mcll] = mbnd;
        let 
        res = thisArg[mcll](...args, ...newArgs);
        delete thisArg[mcll];
        return res;
    };
}

function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}

function sayHi() {
    return `Hi, I'm ${this.name}`;
}

function add(a, b, c) {
    return a + b + c;
}

const user = { name: "Joe Doe" };

const bound1 = showInfo.myBind(user);
console.log(bound1("New York", "USA"));

const bound2 = showInfo.myBind(user, "London");
console.log(bound2("UK"));

const bound4 = add.myBind(undefined, 1, 2, 3);
console.log(bound4(100));

const bound5 = add.myBind(null);
console.log(bound5());