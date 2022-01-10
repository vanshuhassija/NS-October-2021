//Prototype
let arr=["vanshu","Suraj"];

let obj={
    name:"vanshu",
    city:"patiala",
    lastname:"Hassija",
    getIntro:function(){
        return `${this.name} lives in ${this.city}`;
    }
}

let obj2={
    name:"vanshu",
}

//Do not write this code in production, it is just for learning purpose.
obj2.__proto__.__proto__=obj;

console.log("proto",obj2.lastname);

// Try to find the value in the object

const arr=[1,2,3,4];
arr.length;






//Whenever object is created, js attaches these properties to it.

// []   ----> Array
// {}   ----> Object


function foo(){

}
