// -------------declaration-------------
// -------------var-------------

// console.log('without declaration',a); // Uncaught ReferenceError: a is not defined

// console.log('before declaration with var',a) // undefined
// console.log('before declaration without key word',a) // Uncaught ReferenceError: a is not defined

// a; // not hoisted => Uncaught ReferenceError: a is not defined

// var a; // hoisted as undefined

// console.log('before asign value',a); // undefined

// a = 1;

// console.log('asign value',a); // 1

// var a = 2;

// console.log('redeclare value',a); // 2

// x = 1; 

// console.log('declare without key word', x); // 1


// -------------let-const-------------

// console.log('without declaration',a); // Uncaught ReferenceError: a is not defined

// console.log('before declaration with let',a) // Uncaught ReferenceError: a is not defined
// console.log('before declaration without key word',a) // Uncaught ReferenceError: a is not defined

// a; // not hoisted => Uncaught ReferenceError: a is not defined

// let a; // not hoisted => Uncaught ReferenceError: a is not defined

// // console.log('before asign value',a); // undefined

// a = 1;

// // console.log('asign value',a); // 1

// let a = 2;

// console.log('redeclare value',a); // SyntaxError: Identifier 'a' has already been declared

// const b = 1;

// b = 2; // TypeError: Assignment to constant variable.

// const c = [1,2,3];
// c.push(4); // allowed
// console.log('c',c); // [ 1, 2, 3, 4 ]

// const e = {
//     a: 1,
//     b: 2
// }
// e.a = 3; // allowed
// e.c = 4; // allowed
// console.log('e',e); // { a: 3, b: 2, c: 4 }

// -------------scope-------------

// -------------nodejs-------------

// console.log(global);
// console.log(global.setInterval);

// var setInterval = 1;

// console.log(global.setInterval);
// console.log(setInterval);

// -------------browser-------------

// console.log(window.alert); // function
// var alert = 1;
// console.log(window.alert); // 1

// console.log(window.alert); // function
// let alert = 1;
// console.log(window.alert); // fucntion

// console.log(window.alert); // function
// {
//     var alert = 1;
// }
// console.log(window.alert); // 1

// console.log(window.alert); // function
// {
//     let alert = 1;
// }
// console.log(window.alert); // fucntion

// Global Lexical Environment {
//     OER : {
//         var x = 1;
//         function func() {}
//          window: window  // browser api
//          global: global  // nodejs api
//     },
//     DER : {
//         let a = 3;
//         const b = 2;
//     }
// } 