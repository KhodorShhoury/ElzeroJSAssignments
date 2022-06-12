//1

let setOfNumbers= new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers].pop());

//2

 myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()))


//3

let myInfo = {
   username: "Osama",
   role: "Admin",
   country: "Egypt",
 };

 let myInfoMap= new Map([["username", "Osama"],
 ["role", "Admin"],
 ["country", "Egypt"],
]);

 console.log(myInfoMap);
 console.log(myInfoMap.size);
 console.log(myInfoMap.has("role"));

 //4

 let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().join(""));


 //5
 let theName = "Elzero";
 console.log(theName.split(""));
 console.log([...theName]);
 console.log(Array.from(theName));
 console.log([...new Set(theName)]);
 console.log(Object.values(theName));
 //6
 

 let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.copyWithin(3);
console.log(chars);


chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars.copyWithin()

//7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne,...numsTwo]);

console.log(Object.values(numsOne.concat(numsTwo),))
<<<<<<< HEAD
console.log(Array.of(...numsOne, ...numsTwo));
=======
console.log(Array.from(numsOne.concat(numsTwo)));
>>>>>>> e4807bb9da364bceeaf784cce4ae2028a7089073

numsOne.push(...numsTwo)
console.log(numsOne)

//8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

<<<<<<< HEAD
  
=======
console.log([...new Set(n1+n2)])
>>>>>>> e4807bb9da364bceeaf784cce4ae2028a7089073
