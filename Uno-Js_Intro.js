//Declare a variable
// int a=4;
// var,let,const
var a="4.0";
var b="Hello World";

//Javascript is a dynamically typed language

// System.out.println()
console.log("Value of a is",a);
// Print type of Variable a
console.log("Type of a is",typeof a);
//Determine Type of a variable
//typeof <variable-name>

//Right Click---> Inspect ---> Console


// let a=4;
// const a=4;

//Initialise a to value 4;

//Java 8
//Java 7

//ECMA Script ->ES
//let and const were introduced in ES6

//int arr[]=new int[N];

// var arr=[];
// No need to give the length by default
//No need to specify data type
//It can hold hetrogeenous data types

var arr=[1,"Hello World",20,true,"20"];
console.log("Array is",arr);

//Objects

//Defining an object
// var arr=[];
var obj={};

//Every Object has key value pair(s)

// var obj={
//     key:value,
//     key2:value2,
//     key3:value3
// }

var userObj={
   "name":"Vanshu", 
    "city":"Patiala",
    "age":52,
    "profile":"Software Developer",
    "family":["Mother","Father","C","D"],
    "dob":"29 July 1997",
    29:"Hello"
}

//Keys are seperated by commas
//Value can be of any type
//Keys are always strings or number

//Print only one property From Object

//Accessing Keys
//1. userObj.name ---> Is Only Used When Key is of type string
//2. userObj["name"] ---> Is Used Otherwise

console.log(userObj[29]);

//Functions

function foo(){

}

function add(a,b){
    return a+b;
}

//Method 2

var add=function(a,b){
    return a+b;
}


//1. No need to give The types of arguments
//2. No return Type





//Method 3
//Arrow Functions
var add=()=>{
    return a+b
}

var add=()=>a+b;


// No Need to write keyword function
// If there is only one line in function and you remove
//the curly braces then it automatically becomes
//return statement

//Calling a function
add(2,4);
