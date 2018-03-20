class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`
    }
    getAge() {
        return `${this.name} is ${this.age} old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
}

const me = new Student("Matt Barnett", 35, 'Psychology');
const other = new Student()

console.log(me)
console.log(other)