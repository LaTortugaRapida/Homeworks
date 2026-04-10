class Shape {
    constructor(){
        if(new.target === Shape){
            throw new Error("Cannot instantiate abstract class!");
        }
    }

    getArea() {
        throw new Error("Method not implemented!");
    }
};

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }
};

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius *this.radius;
    }
};


const rect = new Rectangle(10, 5);
console.log(rect.getArea());// 50

const shape = new Shape();
// Error: Cannot instantiate abstract class