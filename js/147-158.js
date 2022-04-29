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
