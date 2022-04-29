//1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
 num = 3;

// Method 1
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop()
friends.shift()

console.log(friends); // ["Eman", "Osama"]

//3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr=arrOne.concat(arrTwo).sort().reverse()

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//4 
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length,words[website.length][0].length).toUpperCase()); // ZERO

//5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
//first solution
if(haystack.includes(needle)){
     console.log("found");
}
//second solution
haystack[1]==needle ? console.log("found") : console.log("not found");

//third solution

if(haystack.slice(1,2)==needle){
     console.log("found")
}

//6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy