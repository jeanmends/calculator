let firstValue = 0;
let secondeValue = 0;
let operator = '';


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    switch (c) {
        case "+":
            aux = valorGeral.value;
            valorGeral.value = add(a, b);
            console.log(a + " + " + b);
            break;
        case "-": // Value of foo matches this criteria; execution starts from here
            aux = valorGeral.value;
            valorGeral.value = subtract(a, b)
            console.log(subtract(a, b));
            break;
        // Forgotten break! Execution falls through
        case "x" || "*": // no break statement in 'case 0:' so this case will run as well
            console.log(c);
            aux = valorGeral.value;
            valorGeral.value = multiply(a, b);
            console.log(multiply(a, b));
            break; // Break encountered; will not continue into 'case 2:'
        case "÷" || "/":
            aux = valorGeral.value;
            valorGeral.value = divide(a, b);
            console.log(divide(a, b));
            break;
        default:
            console.log("default");
    }
}

let valorGeral = document.querySelector("#text-values");
let aux = '';
const numbers = document.querySelectorAll('.input-numbers');

numbers.forEach(number => {
    number.addEventListener("click", (values) => {
        let verifyText = valorGeral.value;
        if (number.innerHTML != '.') {
            addValuesToDisplay(number.innerHTML);
        } else if (number.innerHTML === "." && verifyText.length < 1) {
            addValuesToDisplay('');
        } else if (number.innerHTML === "." && verifyText.length > 0 && !verifyText.includes('.')) {
            addValuesToDisplay(number.innerHTML);
        }

    })
});

const operatorStrings = document.querySelectorAll('.display-operations-inputs');
operatorStrings.forEach((element, index) => {
    if (index != 0) {
        element.addEventListener("click", (values) => {
            if (valorGeral.value != '') {
                if (!verifyDuplicateOperator(valorGeral.value)) {
                    addValuesToDisplay(element.innerHTML);
                    operator = element.innerHTML;
                }
            }
        })
    }

});
const iguals = document.querySelectorAll('.display-operations-inputs')[0];
iguals.addEventListener('click', () => {
    if (valorGeral.value != '') {
        let dividir = valorGeral.value;
        dividir = dividir.split(operator);
        if (dividir.length > 1) {
            if (dividir[0].length > 0 && dividir[1].length > 0 && operator.length > 0) {
                operate(dividir[0], dividir[1], operator)
            }
        }
    }
})

function addValuesToDisplay(value) {
    aux = valorGeral.value;
    valorGeral.value += value;
}

document.querySelector(".clear-all")
    .addEventListener("click", () => {
        valorGeral.value = '';
        valorGeral.focus();
    })
/*
valorGeral.addEventListener('keydown', function(e) {
    if (e.key === '+'){
        operator = '+';
    }else if(e.key === '-'){
        operator = '-';
    }else if (e.key === 'x'.toLocaleLowerCase() || e.key === "*"){
        console.log(e.key);
        operator = 'x';
    }else if (e.key == '÷'){
        operator = '÷';
    }
  })
*/

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

const clearLast = document.querySelector('.clear-the-last');

clearLast.addEventListener('click', () => {
    valorGeral.value = aux;
})

function verifyDuplicateOperator(op) {
    const words = ['+', '-', '÷', 'x'];
    const test = words.some(el => op.includes(el));
    if (test) {
        return true;
    }
}

const pointDecimal = document.querySelector('#point-decimal');

pointDecimal.addEventListener('click', () => {

})