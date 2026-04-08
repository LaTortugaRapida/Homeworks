class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    set celsius(value) {
        if(value >= -273.15 && value <= 1000) {
            this._celsius = value;
        } else {
            throw new Error("Invalid Celsius value!");
        }
    }

    get farenheit() {
        return this._celsius * 1.8 + 32;
    }
}

let temp = new Temperature(30);

console.log(temp.farenheit);