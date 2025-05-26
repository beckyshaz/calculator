console.log("hello world");

let x;
let y;
let op;


function add(a, b) {
    return a + b;
}  


function subtract(a, b) {
    return a - b;
}  

let d = 2;
let e = 5;
console.log(subtract(5, 2));


function multiply(a, b) {
    return a * b;
}  

let f = 5;
let g = 2;
console.log(multiply(5, 2));




function devide(a, b) {
    return a / b;
}  

function operate(op, x, y) {
    if (op == '+') {
        add(x, y);
    }
    
    else if (op == '-') {
        subtract(x, y);
    }
    
    else if (op == '*') {
        multiply(x, y);
    }
    
    else if (op == '/') {
        devide(x, y);
    }
};
