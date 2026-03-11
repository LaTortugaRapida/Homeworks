var names = {
    1 : "Ann",
    2 : "Jane",
    3 : "Jack"
};

for(var key of Object.keys(names)) {
    console.log(key, ":", names[key]);
}