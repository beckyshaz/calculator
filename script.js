console.log("hello world");

let x;
let y;
let operator;


function add(a, b) {
    return a + b;
}  


function subtract(a, b) {
    return a - b;
}  

/*let d = 2;
let e = 5;
console.log(subtract(5, 2));
*/

function multiply(a, b) {
    return a * b;
}  



console.log(multiply(5, 2));




function divide(a, b) {
    return a / b;
}  

function operate(a, op, b) {
    
    if (op === '+') {
        return add(a, b);
    }
    
    else if (op === '-') {
        return subtract(a, b);
    }
    
    else if (op === '*') {
        return multiply(a, b);
    }
    
    else if (op === '/') {
        return divide(a, b);
    }
}

let op = '+';
let num1 = 5;
let num2 = 10;

console.log(operate(num1, op, num2));


console.log(operate(15, '*', 2));