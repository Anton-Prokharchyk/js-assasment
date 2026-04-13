//  ============function declarations============

// funcExpession();    //  'funcExpession'
// funcDeclaration();   //  TypeError: funcDeclaration is not a function
// letfuncDeclaration();   //  ReferenceError: Cannot access 'letfuncDeclaration' before initialization
// constfuncDeclaration();   //  ReferenceError: Cannot access 'constfuncDeclaration' before initialization
// console.log('funcDeclaration log', funcDeclaration);    //  undefined
// console.log('funcDeclaration log', letfuncDeclaration);    //  ReferenceError: Cannot access 'letfuncDeclaration' before initialization
// console.log('funcDeclaration log', constfuncDeclaration);    //  ReferenceError: Cannot access 'constfuncDeclaration' before initialization
// funcArrow();   //   TypeError: funcArrow is not a function
// console.log('funcArrow log', funcArrow);;   //   undefined
// console.log('letfuncArrow log', letfuncArrow);;   //   ReferenceError: Cannot access 'letfuncArrow' before initialization
// console.log('constfuncArrow log', constfuncArrow);;   //   ReferenceError: Cannot access 'constfuncArrow' before initialization

function funcExpession() {
	console.log('funcExpession');
}
var funcDeclaration = function () {
	console.log('funcDeclaration');
};
let letfuncDeclaration = function () {
	console.log('funcDeclaration');
};
const constfuncDeclaration = function () {
	console.log('funcDeclaration');
};
var funcArrow = () => {
	console.log('funcArrow');
};
let letfuncArrow = () => {
	console.log('funcArrow');
};
const constfuncArrow = () => {
	console.log('funcArrow');
};
