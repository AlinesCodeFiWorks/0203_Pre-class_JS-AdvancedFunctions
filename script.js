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
