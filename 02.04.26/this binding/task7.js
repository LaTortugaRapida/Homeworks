function show() {
    return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);

console.log(bound.call({ name: "Wrong" })); // Test