// 1
console.log(100_000); // 100000
console.log(100000);
console.log(5e4 + 5e4); // 100000

console.log(1e5); // 100000
console.log(1e3*1e2); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(1e6 / 1e1); // 100000
console.log(1e6 - 9e5); // 100000
console.log(+"100000"); // 100000
console.log(Number("100000")); // 100000
console.log(1e1**5); // 100000); // 100000
console.log(Math.round(99999.7)); // 100000
console.log(Math.floor(100000.5)); // 100000

//2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//3
console.log(Number.MAX_SAFE_INTEGER.toString().length ); // 16

//4 
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//5 
 num = 10;

 console.log(Number.isInteger(num)+Number.isInteger(num));

 //6 

 let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(parseInt(flt)); // 10

//7
console.log(Math.ceil(Math.random() *4)); // 0 || 1 || 2 || 3 || 4

