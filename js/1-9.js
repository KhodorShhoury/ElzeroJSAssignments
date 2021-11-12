//--------------------------------- ---Assigments 001 to 009------------------------------------------------------
//01
//code one (not work)
//code two (work)
//code three (work)

//02 

let h1 =document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontSize="80px";
document.querySelector("h1").style.fontWeight="bold"
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.fontFamily="Arial";

//03
console.log("%cElzero %cWeb %cSchool",'color:red;font-size: 40px','color:green;font-weight:bold;font-size: 40px','background-color:blue;font-size: 40px');


//04

console.group("group1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd()
console.group("Group 2");
console.log("message 1");
console.log("message 2");
console.groupEnd();

//05

console.table(["Elzero" ,"Ahmed","Sameh","Gamal","Aya"]);

//06
//first way
//console.log("Iam In Console");
//document.write("Iam In Page");

//second way 
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
