function points() {
    return `${this.name} has ${this.points} points!`;
}

function showPoints(obj) {
    return `${obj.name} has ${obj.points} points!`;
}

const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };

console.log(points.call(p1));
console.log(points.call(p2));

console.log(showPoints(p1));
console.log(showPoints(p2));