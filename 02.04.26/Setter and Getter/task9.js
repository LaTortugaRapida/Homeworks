class Cart {
    _total;
    constructor() {
        this._total = 0;
    }

    set addPrice(value){
        if(value > 0) {
            this._total += value;
        } else { throw new Error("Value can't be negative!"); }
    }

    get total() {
        return this._total;
    }
}

let cart = new Cart();
console.log(cart.total);
cart.addPrice = 20;
console.log(cart.total); 