// const resultDiv = document.getElementById('result');
// const buttons = document.querySelectorAll('.buttons');
// const clearBtn = document.getElementById('clear');
// const operandBtns = document.querySelectorAll('.buttons.operand');
// const equalBtn = document.querySelector('.buttons.equal');


// resultDiv.textContent = '';

// let firstNum;
// let initialNum;




// buttons.forEach( function(button){


//    button.addEventListener("click", function() {
//     // resultDiv.textContent = '';
//     if(!button.classList.contains('operand') && !button.classList.contains('equal'))
//     {
//         resultDiv.textContent += button.textContent;
//          firstNum = (parseFloat(resultDiv.textContent));
         
//     }
//    });


// });



    


// let currentResult;
// let operator;


// operandBtns.forEach( function(operandi){
//     operandi.addEventListener("click", function() {
//         resultDiv.textContent = '';
//         initialNum = firstNum;

//         if(!operandi.classList.contains('equal')){

//             if(operandi.textContent == '+'){
//                 operator = '+'
//                 resultDiv.textContent = '+';
                
//             }
//             if(operandi.textContent == '-'){
//                 operator = '-'
//                 resultDiv.textContent = '-';
                
//             }

//             if(operandi.textContent == '*'){
//                 operator = '*'
//                 resultDiv.textContent = '*';
                
//             }

//             if(operandi.textContent == '/'){
//                 operator = '/'
//                 resultDiv.textContent = '/';

//             }
            

//          }



         
//     });
    
//  });
 


//  function add(a,b){
//     return currentResult = a + b;
//  }
//  function subtract(a,b){
//     return  currentResult = a - b;
//  }
//  function multiply(a,b){
//     return currentResult = a * b;
//  }
//  function divide(a,b){
//     return currentResult = a / b;
//  }
 
 



//  equalBtn.addEventListener("click", function mathStuff(){
    
//     if(operator == '+'){
//         resultDiv.textContent = add(firstNum,initialNum);
        
//     }
//     if(operator == '-'){
//         resultDiv.textContent = subtract(initialNum,firstNum);
        
//     }

//     if(operator == '*'){
//         resultDiv.textContent = multiply(initialNum,firstNum);
        
//     }

//     if(operator == '/'){
//         resultDiv.textContent = divide(initialNum,firstNum);
//     }
//  });


//  clearBtn.addEventListener("click", function () {
//     resultDiv.textContent = '';
//     firstNum = undefined;
//     initialNum = undefined;
//     currentResult = undefined;
//     operator = undefined;
// });


const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons');
const clearBtn = document.getElementById('clear');
const operandBtns = document.querySelectorAll('.buttons.operand');
const equalBtn = document.querySelector('.buttons.equal');
const pointBtn = document.querySelector('.buttons.point');

resultDiv.textContent = '';

let firstNum;
let initialNum;
let currentResult;
let operator;
let noDecimalResult

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (!button.classList.contains('operand') && !button.classList.contains('equal')) {
            resultDiv.textContent += button.textContent;
            firstNum = parseFloat(resultDiv.textContent);
        }
    });
});

operandBtns.forEach(function (operandi) {
    operandi.addEventListener("click", function () {
        resultDiv.textContent = '';
        pointBtn.style.visibility = 'visible'; 
        if (!operandi.classList.contains('equal')) {
            operator = operandi.textContent;
    
    if (operator == '+') {
        initialNum = firstNum;
    }
    if (operator == '-') {
        initialNum = firstNum;
    }
    if (operator == '*') {
        initialNum = firstNum;
    }
    if (operator == '/') {
        initialNum = firstNum;
    }
        }
    });
});

function add(a, b) {
    return currentResult = a + b;
}
function subtract(a, b) {
    return currentResult = a - b;
}
function multiply(a, b) {
    return currentResult = a * b;
}
function divide(a, b) {
    return currentResult = a / b;
}

equalBtn.addEventListener("click", function mathStuff() {
   

    if (operator == '+') {
        currentResult = add(initialNum, firstNum)
        noDecimalResult = currentResult.toFixed(4)
        resultDiv.textContent = noDecimalResult;
    }
    if (operator == '-') {
        currentResult = subtract(initialNum, firstNum)
        noDecimalResult = currentResult.toFixed(4)
        resultDiv.textContent = noDecimalResult;
    }
    if (operator == '*') {
        currentResult = multiply(initialNum, firstNum)
        noDecimalResult = currentResult.toFixed(4)
        resultDiv.textContent = noDecimalResult;
    }
    if (operator == '/') {
        currentResult = divide(initialNum, firstNum)
        noDecimalResult = currentResult.toFixed(4)
        resultDiv.textContent = noDecimalResult;
    }
    pointBtn.style.visibility = 'visible'; 
});




clearBtn.addEventListener("click", function () {
    resultDiv.textContent = '';
    firstNum = undefined;
    initialNum = undefined;
    currentResult = undefined;
    operator = undefined;
    pointBtn.style.visibility = 'visible'; 
});




pointBtn.addEventListener("click", function(){
    pointBtn.style.visibility = 'hidden'; 
});