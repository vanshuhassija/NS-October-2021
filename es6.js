//ECMA Script
//ES6

//Spread and rest ...
//Can be used on array and Objects
const arr = [1, 2, 3];
console.log(...arr);
//Spread elements of array arr
let arr2 = [5, 6];
//Array 2 should be equal to whatever elements
//arr2 has + elements of arr1
arr2 = [...arr, ...arr2];
//Array2+ sp read all the elements of arr
console.log(arr2);

const obj = {
  name: "Vanshu",
  city: "Patiala"
};
//Obj2 should contain state and all the keys
//from obj
const obj2 = {
  state: "Punjab",
  city: "Ludhiana",
  ...obj
};
console.log("Obj2 is", obj2);

//... rest
function add(a, b, ...restArguments) {
  //restArguments are always the end arguments
  let sum = a + b;
  for (let argument of restArguments) {
    sum += argument;
  }
  return sum;
}

const add4 = add(4, 4, 5, 6, 7);
console.log(add4);
// This add function will have a minimum of 2 arguments
//but can also have more than 2

//Destructuring

const obj5 = {
  name: "Vanshu Hassija",
  city: "Patiala",
  address: {
    state: "Punjab"
  }
};

// const name = obj5.name;
// console.log("Name is", name);

const { name, city } = obj5;
const { state } = obj5.address;
console.log("State is", state);
//When you want to destructure variables from object
// const {<names of the variable>}=object from which ypu want to destructure
