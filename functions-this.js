class Person { /* =>  
    function Person(name) {
        person = 'person';
        this.name = name;
        this.arrowMethod = () => {
            ...
        }
    }
        Person.prototype.methodFunc = function() {
            ...
        }
    */
    person = 'person';
    constructor(name) {
        this.name = name;
    }
    methodFunc() {
        console.log('name methodFunc',this.name);
        console.log('this methodFunc',this);
        console.log('person methodFunc',this.person);
    }
    arrowMethod = () => {
        console.log('name arrowMethod',this.name);
        console.log('this arrowMethod',this);
        console.log('person arrowMethod',this.person);
    }
    methodFunc2 = function() {
        console.log('name methodFunc2',this.name);
        console.log('this methodFunc2',this);
        console.log('person methodFunc2',this.person);
    }
}

const person = new Person('John'); 
// person === { person: 'person', arrowMethod: [Function: arrowMethod], name: 'John' } methodFunc exists only in prototype
// new Person('John') => 
person.methodFunc();
person.arrowMethod();