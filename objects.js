const objA = {
  name: "Vanshu",
  city: "Patiala",
};

const objB = objA;

objB.name = "Vanshu Hassija";

console.log("Obj a name is", objA.name);
console.log("Obj b name is", objB.name);

//Js Object Methods

const objC = {
  name: "Vanshu Hassija",
  city: "Patiala",
  designation: "Developer",
};
//Convert the object to a string
const stringifiedObj = JSON.stringify(objC);

//Convert String to Object
console.log(JSON.parse(stringifiedObj));

//JSON: Javascript Object Notation
//JSON values cannot contain functions

const objD = {};

//You want to assign some values to this object
//const a={name:"Vanshu"}

Object.assign(objD, { name: "Vanshu", city: "Patiala" });
console.log("Object D is", objD);
//First Argument is The target where you want to assign
// Second the key value pair that want to assign
//Methods to copy By Value

//Method 1

const objE = {
  name: "Vanshu",
  city: "Patiala",
  address: {
    district: "Patiala",
  },
};

//Object.assign creates a shallow Copy
// const objF={};
// Object.assign(objF,objE);
// objF.name="Vanshu Hassija"
// objF.address.district="Ludhiana";
// console.log("Obj E  ",objE,"Object F is",objF.name);

//Method 2
//Creates Deep Copy
const objF = JSON.parse(JSON.stringify(objE));
objF.name="Vanshu Hassija"
objF.address.district="Ludhiana";
console.log("Obj E  ",objE,"Object F is",objF);
