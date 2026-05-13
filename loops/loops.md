# Loops

## loop vs recursion

1. loop works inside **one Execution Context**
2. do not creates new **Stack Frames**
3. there is no **parameters allocates**
4. there is no **return address**
5. there is no **overhead on call/return**
   **Conclusion : loops faster, securer, readable, predictable**

## while

```js
while (condition) {
	// body
}
```

1. checks condition before execute body
2. may not be executed even once
3. if use for condition mutable data -> unpredictable behavior
4. dont forget to change condition state

## do...while

```js
do {
	// body
} while (condition);
```

1. body executes minimum one time

## for

```js
for (let i = 0; i < n; i++) {
	// body
}
```

1. the fastest loop in js(JIT optiomization)
2. **let** creates new **Lexical Environment** every iteration

## for...in

```js
for (const key in obj) {
	// body
}
```

1. iterates over object keys
2. order is not guaranteed
3. dont use for arrays(interates indexes as **strings**, can go over **prototype** keys)

## for...of

```js
for (const value of array) {
	// body
}
```

1. iterates over array values
2. can be used with **strings**, **arrays**, **maps**, **sets**, **generators**, **iterators**
3. uses **Symbol.iterator** method

## for await...of

```js
for await (const value of asyncIterable) {
	// body
}
```

1. iterates over asyncIterable values
2. allows write **async loops** without **recursion**
3. do not **overflows stack**

## loops speed comparision

### from fastest to slowest

1. for (...)
2. while (...)
3. for..of
4. for...in
5. Array.porototype.map/filter/reduce

## tricky interview tasks

### for (let vs var...)

```js
for (let i = 0; i < 3; i++) {
	// new Lexical Environment every iteration
	setTimeout(() => console.log(i), 0); // 1 2 3
}

for (var i = 0; i < 3; i++) {
	// same global variable every iteration, no closure
	setTimeout(() => console.log(i), 0); // 3 3 3
}
for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 0); // 3 3 3
	setTimeout((j) => console.log(j), 0, i); // 1 2 3
	setTimeout(function (j) {
		(() => console.log(j), 0, i);
	}); // 1 2 3
}
```

### for...in

```js
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
	arr.push(i);
} // 0, 1, 2, foo
```

### break and continue in forEach

```js
[1,2,3].forEach(x => {
  if (x === 2) break; // SyntaxError
});

```
