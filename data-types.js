// ==============data-types================
// 1. Number, NAN(Not a number)
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt
// 8. Object

console.log(typeof 1); //  number
console.log(typeof NaN); //  number
console.log(typeof '1'); //  string
console.log(typeof true); //  boolean
console.log(typeof null); //  object
console.log(typeof undefined); //  undefined
console.log(typeof Symbol()); //  symbol
console.log(typeof BigInt(1)); //  bigint
console.log(typeof {}); //  object
console.log(typeof []); //  object
console.log(typeof function () {}); //  function
console.log(null === new Object()); //  false
console.log(typeof null === typeof new Object()); //  true
