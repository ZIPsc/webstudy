// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}

log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

// 6. return a value
function sum(a, b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other varibale
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function(){ // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint2!');
const add = (a, b) => a+b;

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// quiz time

const addT = (a, b) => a+b;
const substractT = (a,b) => a-b;
const divideT = (a,b) => a/b;
const multiplyT = (a,b) => a*b;
const remainderT = (a,b) => a%b;

function calculate(command, aNum=1, bNum=1){
    switch(command){
        case 'add':
            console.log(addT(aNum,bNum));
            break;
        case 'substract':
            console.log(substractT(aNum,bNum));
            break;
        case 'divide':
            console.log(divideT(aNum,bNum));
            break;
        case 'multiply':
            console.log(multiplyT(aNum,bNum));
            break;
        case 'remainder':
            console.log(reaminderT(aNum,bNum));
            break;
        default:
            break;
    }
}
calculate('add', 5, 6);