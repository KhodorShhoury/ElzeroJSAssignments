//1
console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 == 100 - 10 + 20); // true
console.log(-10 !== "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(+ "10" === 10); // true
console.log(- 20 < false); // true

//2

let num1 = 10;
let num2 = 20;

console.log(num2>num1); // true
console.log(num1<num2); // true
console.log(num2 !== num1); // true
console.log(num2 !=num1 ); // true
console.log(num2 >= num1); // true
console.log(num1 <= num2); // true

//3

 a = 20;
 b = 30;
 c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true