const person = {
    name : "Mary",
    "second name" : "Jane",
    surname : "Smith",
    age : 32,
    children : {
        child1 : "Benjamin",
        child2 : "Frank"
    }  
};

var person_arr = [];

for(var elem of Object.entries(person)) {
    if(typeof elem[1] === "string") person_arr.push(elem);
}

var filtered = Object.fromEntries(person_arr)
