const arr = [1, 2, 3, 4, 5, 6];

//Return an array which has square of each num
//[1,4,9,16,25,36]

//Array Methods

//Map

//It goes to each and every element of the array
// and executes the function specified
// const squareArray = [];
// for (let i = 0; i < arr.length; i++) {
//   const currentNumber = arr[i];
//   squareArray.push(currentNumber * currentNumber);
// }

const squareArray = arr.map(function (currentElement) {
  //From This function you always
  //need to return something
  return currentElement * currentElement;
});
//When you use map, the resulting array length
//is equal to the array on which map was
//performed

console.log("Square Array is", squareArray, arr);
//the first aergument of map is a function
//The function automatically receives the current
//element being traversed

//Filter
//When youy want to get some of the elements
//from array based on some condition
//Return Only Even Elements from arr array

const evenArray = arr.filter(function (currentElement) {
  //In Filter Function Return the condition
  //on which you want to filter
  return currentElement % 2 === 0;
});
//If Current element is even then push to the array else,
//don't
console.log("Even Array is", evenArray);

//I want to get sum of all elements of the
//array
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

//Reduce
//Reduce is used when you want to get single
//output from the array

//Reduce expects a function as first argument
//and that function automatically receives
//2 arguments

//Reduce  Second Argument: Starting Value of accumulator

const sum = arr.reduce(function (acc, currentElement) {
  //In Reduce You have to always Return
  return acc + currentElement;
}, 0);

console.log("Sum is ", sum);

//All these methods were Introduced in ES6
