const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons');
const clearBtn = document.getElementById('clear');
const operandBtns = document.querySelectorAll('.buttons operand');
const equalBtn = document.querySelector('.buttons.equal');


resultDiv.textContent = '';




buttons.forEach( function(button){
   button.addEventListener("click", function() {
    resultDiv.textContent += button.textContent;
   });
});


buttons.forEach( function(button){
    button.addEventListener("click", function() {
         
    });
 });
 


clearBtn.addEventListener("click", function() {
    resultDiv.textContent = '';
});



