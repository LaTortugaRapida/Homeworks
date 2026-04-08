class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `First: ${this.firstName}, Last: ${this.lastName}`;
    }
}

let emp1 = new Employee("Joe", "Doe");

console.log(emp1.fullName);