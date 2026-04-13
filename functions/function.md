# Functions

## Function Declaration

```js
function foo() {}
```

1. **hoisting** function body and name, can be called before declaration in code.
2. get **this** when get called _( if called in gobal scope **this** would be window object in browser or global in nodejs, in strict mode **this** will be undefined)_
3. has pseudoarray **arguments** which contains all parameters of the fucntion
4. can be used as **contructor**
5. **this** can be asssigned or reassigned with **bind/call/apply**
6. can reassign already exist functions and variables declared with **function** or already exist properties in **window/global** object , and can be redeclared by **var** variables, because have first priority for js engine, and get initialized before **var** variables

## Function Expression

```js
const foo = function () {};
let baz = function () {};
var bar = function () {};
```

1. **hoisting** only name not body, so we cant call the function, with **var** we will get **undefined** instead and with **const/let** we will get an error because of **TDZ**
2. **this** same as **FD**
3. **arguments** same as **FD**
4. can be used as **constructor**
5. with **var** can rewrite already exists function and variables declared with **var** and **function**, if declared with **let/const** we will get an error

## Arrow Function

```js
const foo = () => {};
let baz = () => {};
var bar = () => {};
```

1. **hoisting** only name not body, so we cant call the function, with **var** we will get **undefined** instead and with **const/let** we will get an error because of **TDZ**
2. get **this** from lexical environment where it was declared
3. **this** can not be asssigned or reassigned with **bind/call/apply**
4. do not have **arguments**
5. can not be used as **constructor**
6. with **var** can rewrite already exists function and variables declared with **var** and **function**, if declared with **let/const** we will get an error
7. do not have **super** and **new.target**
8. do not have **prototype**
