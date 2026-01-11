'use strict';

// class Person { /* =>
//     function Person(name) {
//         person = 'person';
//         this.name = name;
//         this.arrowMethod = () => {
//             ...
//         }
//         this.methodFunc2 = function() {
//             ...
//         }
//     }
//     Person.prototype.methodFunc = function() {
//         ...
//     }
//     */
//     person = 'person';
//     constructor(name) {
//         this.name = name;
//     }
//     methodFunc() {
//         console.log('name methodFunc',this.name);
//         console.log('this methodFunc',this);
//         console.log('person methodFunc',this.person);
//     }
//     arrowMethod = () => {
//         console.log('name arrowMethod',this.name);
//         console.log('this arrowMethod',this);
//         console.log('person arrowMethod',this.person);
//     }
//     methodFunc2 = function() {
//         console.log('name methodFunc2',this.name);
//         console.log('this methodFunc2',this);
//         console.log('person methodFunc2',this.person);
//     }
// }

// const Person2 = {
//     person: 'person2',
//     name: 'John2',
//     methodFunc: function() {
//         console.log('name methodFunc',this.name);
//         console.log('this methodFunc',this);
//         console.log('person methodFunc',this.person);
//     },
//     arrowMethod: () => {
//         console.log('name arrowMethod',this.name);
//         console.log('this arrowMethod',this); // {}
//         console.log('person arrowMethod',this.person);
//     },
//     methodFunc2: function() {
//         console.log('name methodFunc2',this.name);
//         console.log('this methodFunc2',this);
//         console.log('person methodFunc2',this.person);
//     }
// }

// const person = new Person('John');
// // person === { person: 'person', arrowMethod: [Function: arrowMethod], name: 'John' } methodFunc exists only in prototype
// // new Person('John') =>
// person.methodFunc();
// person.methodFunc2();
// person.arrowMethod();

// Person2.methodFunc();
// Person2.methodFunc2();
// Person2.arrowMethod();

//  ============strict mode============

// 'use strict'
// function func() {console.log(this)};
// func(); // browser/nodejs this = window/global , strict mode this = undefined

// ============this binding============

// function func() {console.log(this.name)};
// func(); // TypeError: Cannot read properties of undefined (reading 'name')
// func.call({name: 'John'});  // John
// func.apply({name: 'John'}); // John
// const bindedFunc = func.bind({name: 'John'}); // John
// bindedFunc();   // John

// class Person {
//     age = 'age';
//     constructor(age) {
//         this.age = age;
//     }
//     static sayname() {
//         console.log(this.age);
//     }
//     sayname1() {
//         console.log(this.age);
//     }
//     static saynamearrow = () => {
//         console.log(this.age);
//     }
// }
// Person.sayname.bind({ age: '18' })();    // 18
// Person.sayname();    // 18
// Person.prototype.sayname1.bind({ age: '18' })(); //  18
// Person.saynamearrow.bind({ age: '18' })();   //  18
// console.log(Person.saynamearrow.name);  //  saynamearrow

// const person = new Person('18');
// person.sayname1();
// person.saynamearrow(); //   TypeError: person.saynamearrow is not a function

// ============nodejs============

// exports.a = 1;
// module.exports.b = 2;
// console.log('module', module)
// console.log('exports', exports)
// const arrowFunc = () => {console.log(this)};
// function func() {console.log(this)};

// arrowFunc();    // { a: 1, b: 2 }
// arrowFunc.call({name: 'John'}); // { a: 1, b: 2 }

// func();    // undefined
// func.call({name: 'John'}); // {name: 'John'}
