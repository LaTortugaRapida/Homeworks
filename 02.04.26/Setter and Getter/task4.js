class Counter {
    _count;
    constructor() {
        this._count = 0;
    }

    get count() {
        return this._count;
    }

    increment(){
        this._count += 10;
        return this;
    }
}

let counter = new Counter();

console.log(counter.increment().increment().increment().count);