//01
let numberOne=10;
let numberTwo=20;

console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
console.log(typeof(numberOne+""+numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberTwo +"\n"+numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

//02

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//03

console.log("`I'm In '\n'\\\\ \n Love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"javascript\"\"``")

//04
let a = 21;
let b = 20;
let c = b + "" + a;
let d = c + "_"+ c;
console.log(`_${a}_${c}_${d}_${b}_`); // _21_2021_2021_2021_20_