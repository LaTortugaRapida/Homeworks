var names = ["Mary", "Jane", "John", "Sarah"];
const students = {};

for(var item of names) {
    students[item] = item;
}

console.log(students);