//  ============for============

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// function runTask() {
// 	for (var i = 0; i < 3; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 1000);
// 	}
// }

// function runTask() {
// 	for (let i = 0; i < 3; i++) {
// 		if (i === 1) continue;
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 1000);
// 	}
// }

// function runTask() {
// 	for (var i = 0; i < 3; i++) {
// 		if (i === 1) break;
// 		(function (i) {
// 			setTimeout(function () {
// 				console.log(i);
// 			}, 1000);
// 		})(i);
// 	}
// }

// function runTask() {
// 	for (var i = 0; i < 3; i++) {
// 		setTimeout(
// 			function (j) {
// 				console.log(j);
// 			},
// 			1000,
// 			i,
// 		);
// 	}
// }

// runTask();

//  ============while============
// let i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

//  ============do-while============
// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 10);

//  ============for-in============
// const obj = { a: 'a', b: 'b', c: 3 };
// const arr = ['a', 'b', 3];
// for (let i in obj) {
// 	console.log(i, obj[i]);
// }
// for (let i in Object.values(obj)) {
// 	console.log(i);
// }
// for (let i in arr) {
// 	console.log(i, arr[i]);
// }

//  ============for-of============
// const obj = { a: 'a', b: 'b', c: 3 };
// const arr = ['a', 'b', 3];
// for (let i of obj) {
// 	console.log(i, obj[i]);
// } // TypeError: obj is not iterable
// for (let i of Object.keys(obj)) {
// 	console.log(i, obj[i]);
// }
// for (let i of Object.values(obj)) {
// 	console.log(i);
// }
// for (let i of arr) {
// 	console.log(i);
// }
