class Car {
    _speed;
    constructor(speed) {
        this.speed = speed;
    }

    set speed(value) {
        if(value <= 200) {
            this._speed = value;
        } else { throw new Error("Too fast!"); }
    }

    get speed() {
        return this._speed;
    }
}

let car1 = new Car(100);
console.log(car1.speed); 