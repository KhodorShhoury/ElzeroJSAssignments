//1

 friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
 index = 0;
let counter = 0;

while(counter<friends.length){

     if(typeof friends[counter]!=="number"){
          if(friends[counter].charAt(0)!=="A"){
               console.log(`${++index}==>${friends[counter]}`)
          }
     }
     counter++
}

