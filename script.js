//Quick exercise
//Write a function named transformArray that:Adds the value 5 to the start of an array.Removes the last element of the array.Returns a new array where each remaining element is incremented by 1.
//Declaring variables
let myNumbers = [1, 2, 3, 4];
let incrementedNumbers = [];
//Declaring function
function transformArray(myArray) {
  myArray.unshift(5);
  myArray.splice(myArray[myArray.length - 1], 1);
  for (i = 0; i < myArray.length; i++) {
    incrementedNumbers.push(myNumbers[i] + 1);
  }
}
//Calling fucntion
transformArray(myNumbers);
//Logging results
console.log(myNumbers);
console.log(incrementedNumbers);
//FIRST TRY BAAABYYY

//Exercise 1: Basic Callback Function
//Write a function that simulates the process of ordering and preparing food, using a callback to greet the customer once the food is ready.

function greetCustomer() {
  console.log("Your food is ready!");
}
function prepareFood(callback) {
  console.log("Preparing food...");
  callback();
}
prepareFood(greetCustomer);
//DID IT

//Exercise 2:Delayed Callback with setTimeout
//Simulate a delayed server response using a callback.
function requestData(callback) {
  console.log("Requesting data...");
  setTimeout(callback, 2000);
}
function displayData() {
  console.log("Displaying data...");
}

requestData(displayData);
//OMG IT WORKED
//NEXT

//Exercise 1: Writing an Arrow Function
//Write an arrow function that calculates the square of a number.
const square = (x) => x * x;
console.log(square(5));
//For the record, I did omit the parantheses but Prettier adds it back lol

//Exercise 2: Converting a Regular Function to an Arrow Function
//Convert a regular function to an arrow function.
// Regular function
function multiply(a, b) {
  return a * b;
}

// Now, convert the 'multiply' function to an arrow function below:
const multiplyArrow = (a, b) => a * b;

console.log(multiply(3, 4));
console.log(multiplyArrow(3, 4));
// Exercise 1: Using map to Transform an Array
//Use the map function to transform an array of numbers.
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers);

//Exercise 2: Filtering and Mapping Arrays
//Use both filter and map functions to first filter the even numbers, then double them.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2EvenDoubled = numbers2
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(numbers2EvenDoubled);
//unbelievable...it works! Heck yeah!
//Exercise 1: Using setTimeout to delay an action
//Use setTimeout to delay the execution of a function.
function actionExecuted(callback) {
  setTimeout(callback, 3000);
}
function executionMessage() {
  console.log("Action executed!");
}
actionExecuted(executionMessage);
//Exercise 2: Using steInterval to Repeat and Action
//Use setInterval to repeat an action at regular intervals.
function repeatingAction(callback) {
  setInterval(callback, 4000);
}
function repeatingMessage() {
  console.log("Repeating action!");
}
repeatingAction(repeatingMessage);
//I want to run this but I'm scared my computer can;t handle it lol
clearInterval(repeatingAction);
//BAHAHAHAHAH
//the code itself worked but not the clear interval - good news is my computer is doing just fine lol
