class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `, Their major is ${this.major}`
        }

        return description
    }
}

class Traveller extends Person {
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    hasLocation() {
        return !!this.location
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting +=  `, I am visiting from ${this.location}` 
        }
        return greeting
    }
}

const me = new Traveller('Abhinav', 25, 'Manchester');
console.log(me.getGreeting())

const me1 = new Traveller();
console.log(me1.getGreeting())