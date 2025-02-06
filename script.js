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
