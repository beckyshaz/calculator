console.log("hello world");

let x = "";
let y = "";
let operators = "";
let result = null;


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

const display = document.querySelector(".display");

const numButtons = document.querySelectorAll(".num");

const equals = document.querySelector(".is-equal");

function numberButtons (event) {
    let number = event.target.value;
    return number;
}

numButtons.forEach(but => but.addEventListener("click", numberButtons));



function displayNumbers(event) {
    if (operators === "") {
        x += event.target.value;
        display.textContent = x;
    
    } 
    else if (result !== null && operators !== "" ) {
    
        x = result;
    
        display.textContent = x;

        result = null;

        console.log(`y b4 clearing is ${y}`);
        y = "";
        console.log(`y not clearing is ${y}`);
        y += event.target.value;
        console.log(`y b4 clearing is ${y}`);

        display.textContent = y;
        
    }
    /*else if (x !== "" && y != "" && operators !== "" ) {
        console.log(`x is ${x}`);
        console.log(`y is ${y}`);
        
        
        console.log(`operators is ${operators}`);

        result = operate(+x, operators, +y);
        console.log (`results is ${result}`)

        console.log(`x  b4 clearing is ${x}`);
        x = "";
        console.log(`x is ${x}`);
    
        x = result;
        console.log(`x is ${x}`);

        result = null;

        console.log(`Y B4 clearing is ${x}`);
        y = "";
        console.log(`y is ${y}`);

        y += event.target.value; 
        console.log(`y is ${y}`);
        display.textContent = y;

        console.log(`operators is ${operators}`);
        result = operate(+x, operators, +y);

        console.log(`result is ${result}`);
        display.textContent = result


    }*/else {
        y += event.target.value;
        display.textContent = y;
    }


}
    

numButtons.forEach(button => button.addEventListener("click", displayNumbers));

const operatorsButton = document.querySelectorAll(".op");


function  getoperator(event) {
    if (x !== "" && y != "" && operators !== "" ) {
        result = operate(+x, operators, +y);
        display.textContent = result;
        operators = "";
        operators = event.target.value;
    }
    operators = event.target.value; 
} 


operatorsButton.forEach(operator => operator.addEventListener("click", getoperator));

function returnResults() {
    result = operate(+x, operators, +y);
    display.textContent = result;

    //operators = "";
}

equals.addEventListener("click", returnResults);