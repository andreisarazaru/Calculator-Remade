//Screen
let previousScreen = document.querySelector('.previous-screen');
let currentScreen = document.querySelector('.current-screen');
let startScreen = document.querySelector('.start-screen');

//Buttons
let numberButtons = document.querySelectorAll('.number-button');
let operatorButtons = document.querySelectorAll('.operator-button');
let decimalButton = document.querySelector('.decimal-button');
let equalsButton = document.querySelector('.equals-button');

//Clear Buttons
let allClearButton = document.querySelector('.all-clear-button');
let clearButton = document.querySelector('.clear-button');

//variables
let previousNumber = "";
let currentNumber = "";
let result = "";
let operator = "";

//Additional Variables
let LengthOfNumberButtons = numberButtons.length;
let LengthofOperatorButtons = operatorButtons.length;
let parsedCurrentNumber;
let parsedPreviousNumber;
let parsedResult;

//Clicking of Number Buttons
for(let i = 0; i < LengthOfNumberButtons; i++)
{
  numberButtons[i].addEventListener("click", () => {
   numberHandler(numberButtons[i].innerHTML);
   currentScreen.textContent = currentNumber;
  })
}

//Clicking of Operators
for(let i = 0; i < LengthofOperatorButtons; i++)
{
  operatorButtons[i].addEventListener("click", () => {
  

    if (result !== "")
    {
    operatorHandler(operatorButtons[i].innerHTML);
    currentNumber = "";
    currentScreen.textContent = currentNumber;
    previousNumber = result;
    previousScreen.textContent = previousNumber + " " + operator;
    }

    else 
    {
    console.log(operatorButtons[i].innerHTML);
    operatorHandler(operatorButtons[i].innerHTML);
    currentScreen.textContent = operator;
    previousNumber = currentNumber;
    previousScreen.textContent = currentNumber + " " + operator;
    currentNumber = "";
    currentScreen.textContent = currentNumber;
    currentNumber = currentScreen.textContent;

    }

  })
}

//Clicking of Equals Button
equalsButton.addEventListener("click", () => {

    console.log("Operator: " + operator);
    console.log("Previous Number: " + previousNumber);
    console.log("Current Number: " + currentNumber);
    parsedCurrentNumber = parseFloat(currentNumber); 
    parsedPreviousNumber = parseFloat(previousNumber);
    parsedResult = parsedPreviousNumber + parsedCurrentNumber;

    result = operate(parsedPreviousNumber, parsedCurrentNumber, operator);
    
    console.log(result);
    previousScreen.textContent = previousNumber + " " + operator + " " + currentNumber;
    currentScreen.textContent = result;
    previousNumber = result;

})

//Clicking of All Clear (AC) Button
allClearButton.addEventListener("click", () => {
  currentScreen.textContent = " ";
  previousScreen.textContent = " ";
  result = "";
  currentNumber = "";
  previousNumber = "";
  operator = "";

})

//Clicking of Clear Button (C)
clearButton.addEventListener("click", () => {

  if(currentNumber !== "")
  {
  currentNumber = clearChar(currentNumber);
  currentScreen.textContent = currentNumber;
  }

  if(operator !== "")
  {
    operator = clearChar(operator);
    previousScreen.textContent = previousNumber + operator;
  }

  if(currentNumber == "")
  {
  previousNumber = clearChar(previousNumber);
  previousScreen.textContent = previousNumber + operator;
  }
})

//Functions

//Number Handling
function numberHandler(num1)
{
  return currentNumber += num1;
}

//Operator Handling
function operatorHandler(opr)
{
  return operator = opr;
}

//Clear Function
function clearChar(str)
{
  str = str.substring(0, str.length - 1);
  return str;
}

//Factorial function
function findFactorial(num)
{
  let factorial = 1;
  for(let i = 1; i <= num; i++)
  {
    factorial = factorial * i;
  }
  return factorial;
}

//Operate Function
function operate(num1, num2, opr)
{
  if(opr == '+')
  return num1 + num2;
  if(opr == '-')
  return num1 - num2;
  if(opr == '*')
  return num1 * num2;
  if(opr == '/')
  {
    if (num1 == 0 || num2 == 0)
    return "lol";
    else 
    return num1/num2;
  }
  if(opr == '^')
    return Math.pow(num1,num2);
  if(opr == "x!")
    {
      return findFactorial(num1);
    }
}