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
     return ele != ++index
}).join("")
console.log(myStringArr)