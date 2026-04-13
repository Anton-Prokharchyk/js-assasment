//  ============function============

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

// function Func(a, b) {
// 	this.a = a;
// 	this.b = b;
// 	this.foo = function () {
// 		console.log('foo');
// 	};
// 	console.log('Func this', this);
// 	// console.log('Func arguments', arguments);
// 	// console.log('Func name', Func.name);
// 	// console.log('Func length', Func.length);
// }
// const FuncArrow = (a, b) => {
// 	this.a = a;
// 	this.b = b;
// 	this.foo = function () {
// 		console.log('foo');
// 	};
// 	console.log('FuncArrow this', this);
// 	// console.log('FuncArrow arguments', arguments);
// 	// console.log('FuncArrow name', FuncArrow.name);
// 	// console.log('FuncArrow length', FuncArrow.length);
// };

// Func(1);
// FuncArrow(1);

// const a = new Func(1, 2);
// const b = new FuncArrow(1, 2); //  TypeError: FuncArrow is not a constructor
// console.log('a', a);

// Func.call({ baz: 'baz' });
// FuncArrow.call({ baz: 'baz' });

// ============callbacks============

// function callback() {
// 	console.log('callback');
// }

// function a(callback) {
// 	callback();
// }

// a(callback); // callback
