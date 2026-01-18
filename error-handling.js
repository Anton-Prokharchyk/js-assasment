// ===============throw-error-generating================
// throw 'error'; // throw string as error, never do that
// throw new Error('error message'); // contsruct new error as Error object

// ===============different-types-of-errors================
// throw new TypeError('error message'); // contsruct new error as TypeError object
// throw new ReferenceError('error message'); // contsruct new error as ReferenceError object
// throw new SyntaxError('error message'); // contsruct new error as SyntaxError object

// ===============custom-error-class================

// class MyError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = 'MyError';
// 		console.log('err message', message);
// 	}
// }

// function a() {
// 	(() => {
// 		throw new MyError('error');
// 	})();
// }

// // try {
// // 	a();
// // } catch (e) {
// // 	console.log('msg', e.message);
// // 	console.log('stack', e.stack);
// // }

// ===============try-catch-finally================

// function a() {
// 	throw new TypeError('new error');
// }

// try {
// 	a();
// } catch (e) {
// 	console.log('error name', e.name); // error name TypeError
// 	console.log('error msg', e.message); // error msg new error
// 	console.log('error stack trace', e.stack);
// } finally {
// 	console.log('executes after all cases, no matter success or failure');
// }

// ===============try-catch-timeout================

// function a() {
// 	throw new Error('new error');
// }

// try {
// 	setTimeout(a, 1000);
// } catch (e) {
// 	console.log('caught error', e); // nothing
// }

// try {
// 	setTimeout(() => {
// 		try {
// 			a();
// 		} catch (e) {
// 			console.log('caught error within timeout', e); // caught error within timeout new error
// 		}
// 	}, 1000);
// } catch (e) {
// 	console.log('caught error', e); // nothing
// }

// ===============try-catch-promises================

// try {
// 	Promise.reject('error');
// } catch (e) {
// 	console.log('caught error', e); // nothing
// }

// try {
// 	Promise.resolve().then(() => {
// 		throw new Error('error');
// 	});
// } catch (e) {
// 	console.log('caught error', e); // nothing
// }

// try {
// 	Promise.reject('error').catch((e) => {
// 		console.log('caught error from promise catch', e);
// 	});
// } catch (e) {
// 	console.log('caught error', e); // nothing
// }

// ===============try-catch-async-await================

// try {
// 	await Promise.reject('error');
// } catch (e) {
// 	console.log('caught error', e); // caught error error
// }

// ===============global-error-handing-browser================

// window.onerror = function (msg, url, line, col, error) {
// 	console.log('handle uncaught exception');
// 	console.log('msg', msg);
// 	console.log('url', url);
// 	console.log('line', line);
// 	console.log('col', col);
// 	console.log('error', error);
// };
// window.onunhandledrejection = function (reason, p) {
// 	console.log('handle unhandled promise rejection');
// 	console.log('reason', reason);
// 	console.log('p', p);
// };

// Promise.reject('new promise reject error');
// console.log('next');
// throw new Error('new error');
