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
