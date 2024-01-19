const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons');
const clearBtn = document.getElementById('clear');
const operandBtns = document.querySelectorAll('.buttons.operand');
const equalBtn = document.querySelector('.buttons.equal');


resultDiv.textContent = '';

let firstNum;
let secondNum;


buttons.forEach( function(button){

   button.addEventListener("click", function() {
    if(!button.classList.contains('operand') && !button.classList.contains('equal'))
    {
        resultDiv.textContent += button.textContent;
         firstNum = (parseFloat(resultDiv));
         secondNum = (parseFloat(resultDiv));
    }
   });


});


console.log(firstNum);
console.log(secondNum);

operandBtns.forEach( function(operandi){
    operandi.addEventListener("click", function() {
         if(!operandi.classList.contains('equal')){
            
            if(operandi.textContent == '+'){
                resultDiv.textContent += operandi.textContent;
            }
            if(operandi.textContent == '-'){
                resultDiv.textContent += operandi.textContent;
            }

            if(operandi.textContent == '*'){
                resultDiv.textContent += operandi.textContent;
            }

            if(operandi.textContent == '/'){
                resultDiv.textContent += operandi.textContent;
            }



         }
    });
 });
 

 equalBtn.addEventListener("click", function(){
    if(operandi.textContent == '+'){
        
    }
    if(operandi.textContent == '-'){
        
    }

    if(operandi.textContent == '*'){
        
    }

    if(operandi.textContent == '/'){
        
    }
 });


clearBtn.addEventListener("click", function() {
    resultDiv.textContent = '';
});



