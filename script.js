//operate function
let num1=0;
let num2=0;
let operator;
let displayVal="";
let operandCount = 0; //to know when pairs are created
let largeDisplay = document.querySelector(".large-display");
let smallDisplay = document.querySelector(".small-display");
// const element = document.querySelector(".calculator");
let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let equals=document.querySelector(".equals");

function operate(num1, num2, operator) {
  num1=Number(num1);
  num2=Number(num2);
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;

    default:
      break;
  }
return result;
}

const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = function (num1, num2) {
  return num1*num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};


//event listeners
numberBtns.forEach((number) => {
  number.addEventListener("click", numberClick);
});
operatorBtns.forEach((operator) => {
  operator.addEventListener("click", operatorClick);
});
equals.addEventListener("click",equalsHandler)

function numberClick() {
  console.log("\nNumberclick()");

  displayVal=displayVal+this.value;
  largeDisplay.innerText=displayVal;
  if(operandCount==0){
    num1=displayVal;
  }
  else if(operandCount==1){
    num2=displayVal;
    operandCount=2;
  }

  console.log("displayval:",displayVal," num1,num2: ",num1,num2)
  console.log("operator,operandcount: ", operator,operandCount);
}

function operatorClick() {
  console.log("\nOperatorclick()");

  if(operandCount==0){
    operandCount=1;
  }
  else if(operandCount==2){
    num1=operate(num1,num2,operator);
    num2=0;
    operandCount=1;
  }
  operator=this.value;
  largeDisplay.innerText=operator;
  displayVal="";

  console.log("displayval:",displayVal," num1,num2: ",num1,num2)
  console.log("operator,operandcount: ", operator,operandCount);
}
  

//A/C
function clearFunc() {
  
  smallDisplay.innerText = "";
  largeDisplay.innerText = 0;
  num1 = 0;
  num2 = 0;
  displayVal=""
  operator = null;
  operandCount=0;
  result=0;
  console.log("cleared: num1,num2,operator,operandcount:",num1,num2,operator,operandCount);
}

//equals
function equalsHandler(){
  let calc=operate(num1,num2,operator);
  console.log("equals; ", calc)
  largeDisplay.innerText=calc;
}