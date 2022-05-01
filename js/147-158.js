/****************Still working ****************/
//1
class Car{
  constructor(name,model,price){
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run(){
    return "Car Is Running Now";
  }
  stop(){
    return "Car Is Stopped";
  }
}

let carOne = new Car("ferrari",2022,150000);

let carTwo = new Car("BMW",2022,40000);

let carThree = new Car("Jeep",2022,30000);

console.log(`Car One Name is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);

console.log(carOne.run())

//2


class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}


// Write Tablet Class Here

class Tablet extends Phone{5
  constructor(name,serial,price,size){
    super(name,serial,price);
    this.size = size || "Unknown";
  }
  fullDetails(){
    
      return `${this.name} Serial is ${this.serial} And Size Is ${this.size} `
    
  }
}


let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown


//3
//Edit The Class
class User {
 #c
  constructor(username, card) {
    this.u = username;
    this.#c = card;
    this.re = /\d{4}-\d{4}-\d{4}-\d{4}/g; 
  }
   
 get showData(){
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c.toString().match(this.re)}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined



//4
 String.prototype.addLove = function(){
  return `I Love Elzero Web School`
}

let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
