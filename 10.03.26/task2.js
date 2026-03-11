var student = {
    name : "Alex",
    age : 12,
    grade : "fifth",
    classes : {
        class1 : "math",
        class2 : "english",
        class3 : "music"
    }
};

Object.freeze(student);
student.name = "Arthur";
student.classes.class3 = "art";

console.log(student);