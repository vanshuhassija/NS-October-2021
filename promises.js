// A promise is a JS Object That Allows you to make asynchronous calls.
//It produces a value when the async operation
//completes

//How To Create

let promise = new Promise(function (resolve, reject) {
  let a = 15;
  let positiveMessage = "Yes";
  let negativeMessage = "Oh No!";
  //Promise is Fulfilled/completed
  if (a > 10) {
    reject(negativeMessage);
  } else {
    resolve(positiveMessage);
  }
});

//After Promise has been Fulfilled, do something

// Every Promise gives you two signals,
//then and catch

//If Promise is Fulfilled
promise
  .then((successMessage) => {
    console.log("Promise Resolved With Message", successMessage);
  })
  .catch((err) => {
    console.log("Promise was Rejected Because", err);
  });
