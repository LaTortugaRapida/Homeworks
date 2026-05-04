let store = new WeakMap();

function trackAccess(obj) {
    store.set(obj, 0);

    return new Proxy(obj, {
        get(target, prop) {
            let count = store.get(target);
            store.set(target, count+1);
            return target[prop];
        }
    });
}

function getStats(obj) {
    return store.get(obj);
}

// Input
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3