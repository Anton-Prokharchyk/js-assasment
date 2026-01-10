'use strict'

// console.log('without declaration',a); // Uncaught ReferenceError: a is not defined

console.log('before declaration',a) // undefined

var a; // hoisted as undefined

console.log('before asign value',a); // undefined

a = 1;

console.log('asign value',a); // 1

var a = 2;

console.log('redeclare value',a); // 2

x = 1; 

console.log('declare without key word', x); // Uncaught SyntaxError: x is not defined
