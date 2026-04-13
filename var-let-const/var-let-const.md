# var/let/const

## var

1. has function scope, does not create a new variable inside block scope **( {} )**
2. **hoisting** without value, initialized with undefined, but accessible before decloration

3. in the global scope becomes a part of **OER - Object Environment Record**, means added as property of **widnow/global**

   ```js
   var alert = 1;
   alert; // 1
   window.alert(); // not a function
   window.alert; // 1
   ```

4. can be **redeclared** without errors, last declorations wins
5. if a **Function Declaration** has the same name, **FD** is hoisted first,
   but **var** overwrites it at runtime.
6. creates one shared variable for intire loop, does not create a new variable for each iteration

## let/const

1. has block scope **every {}**
2. hoisted but not initialized and get to **TDZ - Temporary Dead Zone**, means declared but not accessable -> **ReferenceError**
3. it becomes a part of **DER Declarative Environment Record** and not become a part of **window/global**

   ```js
   const alert = 1;
   alert; // 1
   window.alert(); // alert fucntion
   ```

4. cannot be redeclared in the same scope -> **SyntaxError**
5. for **let** value can be reassigned, **const** not allows change reference value, but allow change array or object
6. creates a new variable per iteration inside loops
