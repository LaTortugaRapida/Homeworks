class Rectangle {
    _width;
    _height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(value) {
        if(value > 0) {
           this._width = value; 
        } else {
            throw new Error("Width can't be negative!");
        }
    }

        set height(value) {
        if(value > 0) {
           this._height = value; 
        } else {
            throw new Error("Height can't be negative!");
        }
    }

    get area() {
        return this._width * this._height;
    }
}

let rect = new Rectangle(5, 10);
console.log(rect.area);