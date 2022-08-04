// this keyword refers to an object in js
//Which object depends on how this is being invoked

//callsite: Call Site is the place in program from where the
//function is invoked from

//this keyword points to callsite

//1. Default Binding
// function foo(){
//   // This Keyword ----> window
//   console.log(this.name);
//   //console.log(window.name)
// }

// var name="Vanshu Hassija";
// foo();

//2. Implicit Binding

// const name="Vanshu Hassija";

// const obj={
//   name:"Vanshu",
//   foo:function (){
//     console.log("The name of the person is",this.name);
//   }
// }
// //obj is invoking the foo function and not window
// //this keyword is pointing to obj object
// // obj.foo();
// const bar=obj.foo;
// //this keyword is pointing to window object
// bar();

function foo(tvShow,hobby) {
  console.log(
    "I love to eat",
    this.snack,
    "while watching",
    tvShow,
    ". And when I am free I love to",
    hobby
  );
}

var snack = "fries";

const obj = {
  snack: "Pizza",
};

const obj2 = {
  snack: "Momos",
};

//3. Explicit Binding

// foo();
// I want to point this keyword to obj no matter what

//1. Call
//Pass the object which this keyword should refer to
//Call this Function Foo with this keyword always pointing to obj1
// foo.call(obj,"F.R.I.E.N.D.S.","read");

// //If you want to pass additional parametes
// //1. Where this should point to 
// //followed by the paramaters

// //2. Apply
// foo.apply(obj,["F.R.I.E.N.D.S.","read"]);
// //If you want to pass additional parameters to apply
// //you always need to pass array in order.

// //3. Bind
// //Bind creates a copy of the function with this keyword pointing
// //to the passed object
// //Create a copy of foo function with this keyword pointing to obj object
// const bar = foo.bind(obj,"F.R.I.E.N.D.S.","read");
// bar();

//4. New Binding

// class User{
//   constructor(name){
//     this.name=name;
//   }
// }

// const user1=new User("Vanshu Hassija");
//When you write new keyword
//1. A new object is created
//2. This keyword is now pointing to the newly created object.


function x(){
  //This reference is limited to function x only
 const y=()=>{
   //Arrow function preserves this reference of the 
   //enclosing scope
   console.log(this.a);
 }
  y();
}

const obj3={
  a:"Hello"
}

x.call(obj3);
