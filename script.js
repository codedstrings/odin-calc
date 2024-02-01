//operate function
let num1 = 0;
let num2 = 0;
let operator;
let zerroError = false;
let displayVal = "";
let operandCount = 0; //to know when pairs are created
let largeDisplay = document.querySelector(".large-display");
let smallDisplay = document.querySelector(".small-display");
let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let acBtn=document.querySelector(".ac");

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
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
  return num1 * num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};

const divide = function (num1, num2) {
  if (num2 == 0) {
    zerroError = true;
    return "ERROR";
  }
  return num1 / num2;
};

//event listeners
numberBtns.forEach((number) => {
  number.addEventListener("click", numberClick);
});
operatorBtns.forEach((operator) => {
  operator.addEventListener("click", operatorClick);
});
equals.addEventListener("click", equalsHandler);
acBtn.addEventListener("click",clearFunc);

function numberClick() {
  console.log("\nNumberclick()");

  if (zerroError) {
    console.log("zerroError");
    return;
  }

  //displayVal used to concatenate all num entries and make a single number
  displayVal = displayVal + this.value;

  //dipslay current pressed
  largeDisplay.innerText = displayVal;
  if (operandCount == 0) {
    //first time number is entered
    num1 = displayVal;
  } else if (operandCount == 1) {
    // number clicked after an operator is clicked. ie. num1 exists
    num2 = displayVal;
    operandCount = 2;
  }

  console.log("displayval:", displayVal, " num1,num2: ", num1, num2);
  console.log("operator,operandcount: ", operator, operandCount);
}

function operatorClick() {
  console.log("\nOperatorclick()");

  if (operandCount == 0) {
    //for when operator clicked after a number 
    //click after equals is buggy
    operandCount = 1;
  } 
  
  else if (operandCount == 2) {
    //when two operands exists
    let tempReturn = operate(num1, num2, operator);

    //to check for divide by zero errors. 
    if (zerroError) {
      console.log("zerro error");
      //equalshandler to print error and show calculation on small display
      equalsHandler();
      return;
    } 
    else {
      //set num1 as result, num2 to zero and operandcount=1 to continue operations.
      num1 = tempReturn;
      num2 = 0;
      operandCount = 1;
    }
  }

  //set operator val and print calc on small display and currently pressed on largedisplay
  operator = this.value;
  largeDisplay.innerText = operator;
  smallDisplay.innerText = num1 + " " + operator;
  displayVal = ""; //reset displaVal for numberClick to work properly

  console.log("displayval:", displayVal, " num1,num2: ", num1, num2);
  console.log("operator,operandcount: ", operator, operandCount);
}

//onclick A/C button
function clearFunc() {
  //resets all values, clears small display and print 0 in largedisplay
  smallDisplay.innerText = "";
  largeDisplay.innerText = 0;
  zerroError = false;
  num1 = 0;
  num2 = 0;
  displayVal = "";
  operator = null;
  operandCount = 0;
  console.log(
    "cleared: num1,num2,operator,operandcount:",
    num1,
    num2,
    operator,
    operandCount
  );
}

//equals
function equalsHandler() {
  console.log("EqualsHandler");
  //only print equals when two operands are present. 
  if (operandCount == 2) {
    let calc = operate(num1, num2, operator);
    console.log("equals; ", calc);
    smallDisplay.innerText = num1 + " " + operator + " " + num2 + " = ";
    largeDisplay.innerText = calc;
    //displayVal set to calc so it can be used as num1 again.
    displayVal = calc;
  }
}
