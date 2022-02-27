// function add(num1, num2){
//     return num1 + num2;
// }

// function print(a, b){
//     console.log(`a : ${a}, b : ${b}`);
//     console.log(`test`);
// }
// print(4, 5);

// const doSomething = add;

// console.log(doSomething(1, 2));
// console.log(add(3,4));

// function divide(num1, num2){
//     return num1 / num2;
// }

// function surprise(operator){
//     const result = operator(10, 30);
//     console.log(result);
// }
// surprise(add);
// surprise(divide);


/* Line 'DreamCoding by Ellie' class */

// 1. Use Strict
// Added in ES 5
// use this for Vanila Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data dype always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const ellie = {age : 21, name : "ele"}; // object
console.log(ellie.age);
console.log(ellie.name);
ellie.age = 25;
console.log(ellie.age);

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);