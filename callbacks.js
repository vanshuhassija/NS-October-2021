//Take Two Numbers, add it and show the result

function showResult(calculation) {
  const demoElement = document.getElementById("demo");
  demoElement.innerText = calculation;
}

function doNothing(){

}

function myCalculator(num1, num2, functionToBeExecuted) {
  let sum = num1 + num2;
  functionToBeExecuted(sum);
  return sum;
}

let result = myCalculator(5, 5, showResult);

let result2=myCalculator(6,6,doNothing);

// let result2=myCalculator(5,6);
// console.log(result2);

//Show the Result;

//You have to make multiple function calls

//You cannot prevent Function call from myCalculator

//Whenever a function is passed as an argument,
//it is passed by reference.


// A callback function is a function passed as 
//an argument to another Function.
