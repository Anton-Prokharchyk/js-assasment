// ============arrays============

// const arr = [1, 2, 3, 4];
// console.log(arr); // [ 1, 2, 3, 4 ]
// console.log(arr.length); // 4
// console.log(arr[0]); // 1
// console.log(arr.push(5)); // 5
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr.pop(5)); // 5
// console.log(arr); // [ 1, 2, 3, 4 ]
// console.log(arr.shift()); // 1
// console.log(arr); // [ 2, 3, 4 ]
// console.log(arr.unshift(1)); // 1
// console.log(arr); // [ 1, 2, 3, 4 ]

// ============forEach============

// const arr = [1, 2, 3, 4];
// const newArr = arr.forEach((item, index) => {
// 	console.log(item);
// 	item++; //  does not affect the original array
// 	arr[index]++; //  mutates the original array
// 	return item; //  do nothing
// });
// console.log(arr); //  [ 2, 3, 4, 5 ]
// console.log(newArr); // undefined

// ============map============

// const arr = [1, 2, 3, 4];
// const newArr = arr.map((item, index) => {
// 	console.log(item);
// 	item++; //  do nothing
// 	arr[index]++; //  mutates the original array
// 	return ++item; //  does not affect the original array, creates new one
// });
// console.log(arr); //  [ 2, 3, 4, 5 ]
// console.log(newArr); // undefined

// ============reduce============

// const arr = [1, 2, 3, 4];
// const accumulator = arr.reduce((acc, item, index, oldArr) => {
// 	console.log(item);
// 	console.log('acc', acc);
// 	item++; //  do nothing
// 	oldArr[index]++; //  mutates the original array
// 	return (acc += item); //  assign to accumulator
// }, 0 /* initial value */);
// console.log(arr); //  [ 2, 3, 4, 5 ]
// console.log(accumulator); // undefined

// ============filter============

// const arr = [1, 2, 3, 4];
// const filteredArr = arr.filter((item) => {
// 	console.log(item);
// 	return item > 2; //  if true, add to new array
// });
// console.log(arr); //  [ 1, 2, 3, 4 ]
// console.log(filteredArr); // [ 3, 4 ]

// ============find============

// const arr = [1, 2, 3, 4];
// const el = arr.find((item) => {
// 	console.log(item);
// 	return item > 2; //  returns the first true element
// });
// console.log(arr); //  [ 1, 2, 3, 4 ]
// console.log(el); // 3

// ============findIndex============

// const arr = [1, 2, 3, 4];
// const index = arr.findIndex((item) => {
// 	console.log(item);
// 	return item > 2; //  returns the first true element
// });
// console.log(arr); //  [ 1, 2, 3, 4 ]
// console.log(index); // 2

// ============includes============

// const arr = [1, 2, 3, 4];
// const index = arr.findIndex((item) => {
// 	console.log(item);
// 	return item > 2; //  returns the first true element
// });
// console.log(arr); //  [ 1, 2, 3, 4 ]
// console.log(index); // 2

// ============isArray============

// const arr = [1, 2, 3, 4];
// console.log(Array.isArray(arr)); // true

// ============concat============

// const arr = [1, 2];
// const arr2 = [3, 4];
// const arr3 = arr.concat(arr2);
// console.log(arr3); // [ 1, 2, 3, 4 ]
