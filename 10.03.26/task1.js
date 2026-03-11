const person1 = {
    name : "Mary",
    second_name : "Jane",
    age : 32,
    children : {
        child1 : "Benjamin",
        child2 : "Frank"
    }  
};

const person2 = {
    name : "William",
    surname : "Smith",
    age : "26"
};

var mergedPerson = {};
Object.assign(mergedPerson, person1, person2);
