// ===========timeout===========

// setTimeout(() => {
// 	console.log('timeout');
// }, 1000);

// // ===========interval===========

// setInterval(() => {
// 	console.log('interval');
// }, 1000);

// ===========0ms===========

// setTimeout(() => {
// 	console.log('timeout');
// }, 0);

// const interval = setInterval(() => {
// 	console.log('interval');
// }, 0);
// setTimeout(() => {
// 	console.log('clear interval');
// 	clearInterval(interval);
// }, 0);

// Promise.resolve().then(() => {
// 	console.log('promise');
// });

// console.log(1);

// ===========cleanup===========

// const timer = setTimeout(() => {
// 	console.log('cleared timeout');
// }, 1000);

// const interval = setInterval(() => {
// 	console.log('cleared interval');
// }, 1000);

// clearTimeout(timer);
// clearInterval(interval);

// ===========interval-with-timeout===========

// function repeat() {
// 	console.log('do work');
// 	setTimeout(repeat, 1000);
// }
// repeat();
