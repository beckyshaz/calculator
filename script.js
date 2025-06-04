console.log("hello world");

let x = "";
let y = "";
let operators = "";
let result = null;

let errorMessage = "";

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

function modulo(a, b) {
    return a % b;
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

    else if (op === '%') {
        return modulo(a, b);
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

const clear = document.querySelector(".clear");

const del = document.querySelector(".delete");

function deleteValue() {
    if (display.textContent.length > 0) {
        if (operators === "") {

            let xValue = x;
            let newXValue = "";
            for (let i = 0; i < xValue.length; i++ ) {
                newXValue = xValue.slice(0, -1);
            }
            display.textContent = newXValue;
            x = newXValue;
        }
        /*else if (x !== "" && operators !== "" && y === "") {
            operators = "";
        }*/else {
            let yValue = y;
            let newYValue = "";

            for (i = 0; i < yValue.length; i++) {
                newYValue = yValue.slice(0, -1);
                display.textContent = newYValue;
            }
            y = newYValue;
        }
       
    }

    
}

del.addEventListener("click", deleteValue);

function clearDisplay() {
    display.textContent = "";
    x = "";
    y = "";
    operators = "";
    result = null;
} 

clear.addEventListener("click", clearDisplay);

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
    else if (result !== null && operators !== "") {
    
        x = result;
    
        display.textContent = x;

        result = null;

        console.log(`y b4 clearing is ${y}`);
        y = "";
        console.log(`y not clearing is ${y}`);
        y += event.target.value;
        console.log(`y b4 clearing is ${y}`);

        display.textContent = y;
        
    }else {
        y += event.target.value;
        display.textContent = y;
    }


}
    

numButtons.forEach(button => button.addEventListener("click", displayNumbers));

const operatorsButton = document.querySelectorAll(".op");



function  getoperator(event) {
    if (x !== "" && operators !== "" && (y === "" || result !== null)) {
        operators = "";
        operators = event.target.value;
    

    }
    else if (x !== "" && y != "" && operators !== "" ) {
        result = +operate(+x, operators, +y).toFixed(4);
        display.textContent = result;
        operators = "";
        operators = event.target.value;
    }
   
    operators = event.target.value; 
}  


operatorsButton.forEach(operator => operator.addEventListener("click", getoperator));

function returnResults() {

   
    result = +operate(+x, operators, +y).toFixed(4);
    
    display.textContent = result;

    if (x === "" && y === "" && operators === "") {
        errorMessage = "please enter the numbers to work on and operator";
        display.textContent = errorMessage;
    }

    else if ( x !== "" && y === "" && operators === "") {
        errorMessage = "please enter the other number and operator";
        display.textContent = errorMessage;
    }


    else if ( x !== "" && y === "" && operators !== "" ) {
        errorMessage = "please enter the other number";
        display.textContent = errorMessage;
    }

    else if (operators !== "" && x === "" && y === "" ) {
        errorMessage = "please enter the numbers to work on";
        display.textContent = errorMessage;
    }





    /*y = "";
    x = "";
    result = null;
    operators = "";*/
}

equals.addEventListener("click", returnResults);