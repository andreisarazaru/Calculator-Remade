//Screen
let previousScreen = document.querySelector('.previous-screen');
let currentScreen = document.querySelector('.current-screen');

//Buttons
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let decimalButton = document.querySelector('.decimal');
let equalsButton = document.querySelector('.equals');

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
    parsedCurrentNumber = parseInt(currentNumber); 
    parsedPreviousNumber = parseInt(previousNumber);
    parsedResult = parsedPreviousNumber + parsedCurrentNumber;

    result = operate(parsedPreviousNumber, parsedCurrentNumber, operator);
    
    console.log(result);
    previousScreen.textContent = previousNumber + " " + operator + " " + currentNumber;
    currentScreen.textContent = result;
    previousNumber = result;

})


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

//Converting string to integer 
function stringToInteger(num)
{
  num = parseInt(num);
  return num; 
}

//Display Number
function displayNumber(screen1)
{
 return screen1.textcontent = num1;
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