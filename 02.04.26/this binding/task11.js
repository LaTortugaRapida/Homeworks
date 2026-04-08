const obj = {
    value: 100,
    get() {
        function inner() {
            return this.value;
        }
        return inner.bind(obj)();
    }
};

console.log(obj.get());