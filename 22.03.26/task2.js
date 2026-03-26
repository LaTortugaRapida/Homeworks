Function.prototype.myApply = function(thisArg, args) {
    if(thisArg === null || thisArg === undefined) {
        thisArg = globalThis; 
    }

    thisArg = Object(thisArg);

    if(args === undefined || args === null) { args = []; }

    let mappl = Symbol("apply");
    thisArg[mappl] = this;
    let res = thisArg[mappl](...args);
    delete thisArg[mappl];

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
    return a + b;
}

console.log(showInfo.myApply(user, ["New-York", "USA"]));
console.log(sayHi.myApply(user1));
console.log(add.myApply(null, [2, 3]));
console.log(add.myApply());
console.log(add.myApply(null, []));