//operate function
let num1;
let num2;
let operator;
let displayVal;
let largeDisplay=document.querySelector(".large-display");
let smallDisplay=document.querySelector("small-display")
// const element = document.querySelector(".calculator");
let numberBtns=document.querySelectorAll(".number");
let operatorBtns=document.querySelectorAll(".operator");

function operate(num1,num2,operator){
    switch (operate) {
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        
    
        default:
            break;
    }
}

const add = (num1, num2) => {
    return num1 + num2;
  };
  
  const multiply = function (num1,num2) {
    return num1*num2;
  };
  const subtract = function (num1, num2) {
    return num1 - num2;
  };
  
  const divide=function(num1,num2){
      return num1/num2;
  }
  
numberBtns.forEach(number => {
    number.addEventListener("click",numberClick)
});
operatorBtns.forEach(operator => {
    operator.addEventListener("click",operatorClick)
});
function numberClick(){
    displayVal=this.value ;
    console.log("num1 =",num1);
    largeDisplay.innerText=displayVal;
}
function operatorClick(){
    num1=displayVal;
    displayVal=this.value;
    console.log("operator:",operator);
    largeDisplay.innerText=displayVal;
}

//A/C
function clearFunc(){
    largeDisplay.innerText="";
}