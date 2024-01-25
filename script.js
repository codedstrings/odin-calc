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
let num1;
let num2;
let operator;

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