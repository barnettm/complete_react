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

const me = new Person("Matt Barnett", 35);
const other = new Person()

console.log(me.getAge())
console.log(other.getAge())