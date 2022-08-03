const arr = [1, 2, 3];

arr.map((num) => num + 1);

// number ---> Number
//string ----> String
// object ---> Object
//array ----> Array

//Print Something

function foo() {
  Array.prototype.vanshu = function () {
    console.log("Vanshu Hassija");
  };

  arr.vanshu();
}
foo();
const arr2 = [1, 5, 6, 8];
arr2.vanshu();
