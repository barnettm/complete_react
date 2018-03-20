class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description
    }
}

const me = new Student("Matt Barnett", 35, 'Psychology');
const other = new Student()

console.log(me.getDescription())
console.log(other.getDescription())