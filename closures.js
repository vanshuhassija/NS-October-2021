//Closures

//A function bundelled with its lexical environment is called closure.

// Function y is bound to lexical scope of x;

function x(){
  var a=7;
    function y(){
        console.log("A is",a);
    }
    // the Function Itself+ Lexical Environment 
   return y; 
}
//y+ lexical scope of x is closure

var z=x(); //Function + Lexical Environment of x
//Function+ a:7


// Execution Context of x is gone
z()

//Functions returned from another function, still maintain their
//lexical Scope


// function a(){
//     return 5;
// }

// const b=a();//5
