//Prototype Inheritence

let arr = [1, 2, 3, 4];
console.log(arr.length);

let obj = {
  name: "Vanshu",
  getUser: () => {
    return this.name + "is from" + this.city;
  }
};
//Never Do this
let obj2 = {
  name: "Vanshu"
};

obj2.__proto__ = obj;


console.log(obj2.city);

//JS adds hidden properties to the array, objects, functions
//by itself

//__proto__
//__proto__ is an object which contains hidden properties
// and are automatically attached to objects, arrays and functions

console.log("Proto of obj is", obj.__proto__);

//Everything in Js is an object
