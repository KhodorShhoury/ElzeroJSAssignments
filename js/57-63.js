//1
function sayHello(theName, theGender) {
     if(theGender=="Male"){
          console.log(`Hello Mr ${theName}`)
     }else if (theGender=="Female"){
          console.log(`Hello Miss ${theName}`)
     }else{
          console.log(`Hello ${theName}`)
     }
   }
   
   // Needed Output
   sayHello("Osama", "Male"); // "Hello Mr Osama"
   sayHello("Eman", "Female"); // "Hello Miss Eman"
   sayHello("Sameh"); // "Hello Sameh"

   //2

   function calculate(firstNum, secondNum, operation) {
        if(secondNum==null || firstNum==null){
             console.log("Second Number Not Found")
        }else{
               if(operation=="add"){
          console.log(firstNum+secondNum);
     }else if(operation=="subtract"){
          console.log(firstNum-secondNum);
     }else if(operation=="multiply"){
          console.log(firstNum*secondNum)
     }
        }
   
   }
   
   // Needed Output
   calculate(20); // Second Number Not Found
   calculate(20, 30); // 50
   calculate(20, 30, 'add'); // 50
   calculate(20, 30, 'subtract'); // -10
   calculate(20, 30, 'multiply'); // 600


   //3

   function ageInTime(theAge) {
     if (theAge < 100 && theAge > 10) {
       console.log(`Your Age In Months ${theAge * 12}`);
       console.log(`Your Age In Weeks ${theAge * 12 * 4}`);
       console.log(`Your Age In Days ${theAge * 12 * 4 * 7}`);
       console.log(`Your Age In Hours ${theAge * 12 * 4 * 7 * 24}`);
       console.log(`Your Age In Minutes ${theAge * 12 * 4 * 7 * 24 * 60}`);
       console.log(`Your Age In Seconds ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
     } else {
       console.log(`Age Out Of Range`);
     }
   }
   
   // Needed Output
   ageInTime(110); // Age Out Of Range
   ageInTime(38); // Months Example => 456 Months

   //4
   


   //5
   function createSelectBox(startYear, endYear) {
     document.write("<select>")
     for(let i=startYear;i<=endYear;i++){
          document.write(`<option>${i}</option>`)
     }
     document.write("</select>")
   }
   createSelectBox(2000, 2021);


   //6

function multiply(...num){
     let result=1;
     for(let i=0;i<num.length;i++){
          if(typeof num[i]=="string"){
               continue
          }
          
      result*=parseInt(num[i])
     }
     return result
}

   console.log(multiply(10, 20)); // 200
   console.log(multiply("A", 10, 30)); // 300
   console.log(multiply(100.5, 10, "B")); // 1000

   