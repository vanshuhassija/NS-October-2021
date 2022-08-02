function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((finalResponse) => {
      console.log("Final Response is", finalResponse);
    })
    .catch();
  //fetch returns a promise
}

//It will go to then if fetch promise resolves

// fetch(url)

getData();
console.log("After Promise");
