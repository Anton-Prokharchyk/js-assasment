// =============contstructor============

// const o = new Object();
// const o2 = new Object(null);
// const o3 = Object();
// const o4 = Object(undefined);

// console.log(o, o2, o3, o4); //  {} {} {} {}

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.sayname = function () {
// 		console.log(this.name);
// 	};
// 	this.sayage = () => console.log(this.age);
// }
// const person = new Person('John', 18);
// // console.log(person);
// // person.sayname();
// person.sayage();
// const ob = {
// 	say: function () {
// 		console.log(this);
// 	},
// 	say2: () => console.log(this),
// };
// ob.say();    //  { say: [Function: say], say2: [Function: say2] }
// ob.say2();  //  {}

// =============bidning-this============

// const person = {
// 	name: 'John',
// 	age: 18,
// 	sayname: function () {
// 		console.log(this.name);
// 	},
// 	sayage: () => console.log(this.age),
// };
// const person2 = {
// 	name: 'boris',
// };
// person.sayname(); //  John
// person.sayname.call(person2); //  boris
// person.sayage(); //  undefined
// person.sayage.call(person); //  undefined

// const person = {
// 	name: 'John',
// 	age: 18,
// 	get sayage() {
// 		return () => console.log(this.age);
// 	},
// };

// person.sayage(); // 18

// =============computed-fields============

// function getname() {
// 	return 'John';
// }
// function getfield() {
// 	return 'name';
// }

// const person = {
// 	[getfield()]: getname(),
// };
// console.log(person); // { name: 'John' }

// =============object-methods============

// const person = {
// 	name: 'John',
// 	age: 18,
// 	sayname() {
// 		console.log(this.name);
// 	},
// 	sayage() {
// 		console.log(this.age);
// 	},
// };
// console.log(Object.keys(person)); //  [ 'name', 'age', 'sayname', 'sayage' ]
// console.log(Object.values(person)); //  [ 'John', 18, [Function: sayname], [Function: sayage] ]
// console.log(Object.entries(person)); //  [ [ 'name', 'John' ], [ 'age', 18 ], [ 'sayname', [Function: sayname] ], [ 'sayage', [Function: sayage] ] ]
// console.log(Object.fromEntries(Object.entries(person))); //  {name: 'John',age: 18,sayname: [Function: sayname],  sayage: [Function: sayage]}

// for (const key in person) {
// 	console.log(key, person[key]);
// }

// // for (const key of person) {	//	TypeError: person is not iterable
// // 	console.log(key);
// // }

// for (const key of Object.keys(person)) {
// 	console.log(key);
// }

// for (const key of Object.values(person)) {
// 	console.log(key);
// }

// =============object-coping============

// --------------coping-by-reference--------------

// const o = {
// 	name: 'John',
// 	age: 18,
// 	father: {
// 		name: 'Boris',
// 		age: 22,
// 	},
// };

// const o2 = o;
// o2.name = 'Boris';
// console.log(o, o2); // { name: 'Boris', age: 18, father: { name: 'Boris', age: 22 } } { name: 'Boris', age: 18, father: { name: 'Boris', age: 22 } }

// --------------shallow-copy--------------

// const o = {
// 	name: 'John',
// 	age: 18,
// 	father: {
// 		name: 'Boris',
// 		age: 22,
// 	},
// };

// const o2 = {
// 	age: 42,
// };

// // const o3 = { ...o };
// // o3.name = 'Boris';
// // console.log(o, o3); // { name: 'John', age: 18, father: { name: 'Boris', age: 22 } } { name: 'Boris', age: 18, father: { name: 'Boris', age: 22 } }

// console.log('o2', o2);
// const o4 = Object.assign({}, o);
// const o3 = Object.assign(o, o2);
// console.log('o3', o3); //	{ name: 'Iris', age: 42, father: { name: 'Boris', age: 22 } }
// o3.father.age = 23;
// console.log('o', o);
// console.log('o2', o2);
// console.log('o3', o3);
// console.log('o4', o4);

// --------------deep-copy--------------

// const o = {
// 	name: 'John',
// 	age: 18,
// 	father: {
// 		name: 'Boris',
// 		age: 22,
// 	},
// };

// const o2 = structuredClone(o);
// o2.father.age = 42;
// console.log('o', o); //	o { name: 'John', age: 18, father: { name: 'Boris', age: 22 } }
// console.log('o2', o2); //	o2 { name: 'John', age: 18, father: { name: 'Boris', age: 42 } }

// const o2 = JSON.parse(JSON.stringify(o));
// o2.father.age = 42;
// console.log('o', o); //	o { name: 'John', age: 18, father: { name: 'Boris', age: 22 } }
// console.log('o2', o2); //	o2 { name: 'John', age: 18, father: { name: 'Boris', age: 42 } }

// --------------passing-into-fucntions--------------

// function func(o) {
// 	o.name = 'Boris';
// }
// const o = {
// 	name: 'John',
// 	age: 18,
// 	father: {
// 		name: 'Boris',
// 		age: 22,
// 	},
// };
// func(o);
// console.log('o', o); //	o { name: 'Boris', age: 18, father: { name: 'Boris', age: 22 } }

// --------------comparing-objects--------------

// const o = {
// 	name: 'John',
// 	age: 18,
// 	father: {
// 		name: 'Boris',
// 		age: 22,
// 	},
// };
// const o2 = {
// 	name: 'John',
// 	age: 18,
// 	father: {
// 		name: 'Boris',
// 		age: 22,
// 	},
// };
// const o3 = o;
// console.log(o === o2); //	false
// console.log(o === o3); //	true

// const a = [1];
// const b = [1];
// const c = b;
// console.log(a === b); //	false
// console.log(a === c); //	false
// console.log(b === c); //	true
