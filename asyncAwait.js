// Async Await

async function foo() {
  // await is another keyword which can only be used
  //inside an async function
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now Resolving");
      resolve("Hurrah!");
    }, 2000);
  });
  //Wait for promise to complete
  let response = await promise; 
  //This statement will be executed if the promise has been
  //completed
  console.log("Promise Completed");
  // I want to print this only if Promise has Completed
}
foo();
console.log("Called After Foo");

//await

//This Function always Returns a promise

//as Soon as await keyword is encountered, it stops the execution
// of function and keeps on other Tasks


//await encountered, stop the function execution
// Keep on performing other pending tasks
// If promise is resolved, then start the function
//from where it stopped.
