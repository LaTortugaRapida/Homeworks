class Product {
    _price;
    constructor(price){
        this.price = price;
    }

    set price(value) {
        if(value > 0) {
            this._price = value;
        } else {
            throw new Error("Price can't be negative!");
        }
    }

    get discount(){
        return this._price - (this._price * 0.10);
    }
}

let product = new Product(800);
console.log(product.discount)
