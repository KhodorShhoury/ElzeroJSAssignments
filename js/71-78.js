 //1
 
 mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixarr= mix.map(function(el,index,arr){
     return isNaN(el) ? el : "";
}).reduce((acc, cur) => {
    return acc+cur
})
console.log(mixarr)
// Elzero

//2
 let myString = "EElllzzzzzzzeroo";

 let myStringArr= myString.split("").filter(function(ele,index,arr){
      return myString.indexOf(ele)===index
 }).join("")
 console.log(myStringArr)


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray.reduce(function(acc,cur,index,arr){
     return acc+cur
}).split("").filter(function(ele){
     return ele !== ","
}).reduce(function(acc,cur){
  return   acc +cur
})
console.log(newArr)
// Elzero

//4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numsarr=numsAndStrings.filter(function(ele,index){
     return typeof ele == "number"
}).map(function(ele,index){
     return -ele
})

console.log(numsarr)
// [-1, -10, 10, 20, -5, -3]

//5

let nums = [2, 12, 11, 5, 10, 1, 99];

let myArr = nums.reduce(function(acc,cur,index,arr){
     return cur % 2 !== 0 ? acc+cur : acc * cur
},1)
console.log(myArr);