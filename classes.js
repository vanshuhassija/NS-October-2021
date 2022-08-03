//Classes in Js

// Classes are syntatical sugar which provide you
//the template to encapsulate data

//Classes are built on top of functions

class UserCreator{
  constructor(name,score){
    this.name=name;
    this.score=score;
  }
  increment(){
    this.score++
  }
  login(){
    console.log("Login");
  }
}

const user1=new UserCreator("Vanshu",100);
user1.increment();
user1.login();

//Internally
// function userCreator(name,score){
//   this.name=name;
//   this.score=score;
// }
// userCreator.prototype.increment=function(){
//       this.score++
//     }
    // userCreator.increment();


  
