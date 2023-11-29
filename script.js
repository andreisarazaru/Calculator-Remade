//Screen
let previousScreen = document.querySelector('.previous-screen');
let currentScreen = document.querySelector('.current-screen');

//Buttons
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let decimalButton = document.querySelector('.decimal');
let equalsButton = document.querySelector('.equals');

//Additional Buttons
let factorialButton = document.querySelector('.factorial');
let powerButton = document.querySelector('power');

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
   console.log(numberHandler(numberButtons[i].innerHTML));
   currentScreen.textContent = currentNumber;
  })
}

//Clicking of Operators
for(let i = 0; i < LengthofOperatorButtons; i++)
{
  operatorButtons[i].addEventListener("click", () => {
  
    console.log("Result before if: " + result);
    if (result !== "")
    {
    currentNumber = "";
    currentScreen.textContent = currentNumber;
    previousNumber = result;
    previousScreen.textContent = previousNumber + " " + operator;

    }

    else {
    console.log(operatorButtons[i].innerHTML);
    operatorHandler(operatorButtons[i].innerHTML);
    currentScreen.textContent = operator;
    previousNumber = currentNumber;
    previousScreen.textContent = currentNumber + " " + operator;
    currentNumber = "";
    currentScreen.textContent = currentNumber;
    currentNumber = currentScreen.textContent;
    console.log("Previous Number in Operators: " + previousNumber);
    console.log("Current Number in Operators: " + currentNumber);
    }

  })
}

//Clicking of Equals Button
equalsButton.addEventListener("click", () => {
    console.log("Current Number: " + currentNumber);
    console.log("Previous Number: " + previousNumber);

    parsedCurrentNumber = parseInt(currentNumber); 
    parsedPreviousNumber = parseInt(previousNumber);
    parsedResult = parsedPreviousNumber + parsedCurrentNumber;
    console.log("Sum in equals: " + parsedResult);
    result = parsedResult.toString();
    console.log("Result in equals: " + result);
    previousScreen.textContent = previousNumber + " " + operator + " " + currentNumber;
    currentScreen.textContent = result;
    previousNumber = result;
    console.log("Previous number in equals: " + previousNumber);
    console.log("Current number now in equals: " + currentNumber);
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