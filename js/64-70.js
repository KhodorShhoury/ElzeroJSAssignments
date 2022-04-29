//1

function getDetails(zName, zAge, zCountry) {
     function namePattern(zName) {
       return `Hello ${zName.split(" ")[0]} ${zName.split(" ")[1].slice(0,1).toUpperCase()}.`
       // Osama Mohamed => Osama M.
       // Ahmed ali => Ahmed A.
     }
     function ageWithMessage(zAge) {
       return `Your Age Is ${zAge.split(" ")[0]}`
       // 38 Is My Age => Your Age Is 38
       // 32 Is The Age => Your Age Is 32
     }
     function countryTwoLetters(zCountry) {
      return `you live in ${zCountry.slice(0,2).toUpperCase()}`
       // Egypt => You Live In EG
       // Syria => You Live In SY
     }
     function fullDetails() {
       return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
     }
     return fullDetails(); // Do Not Edit This
   }
   
   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
   // Hello Osama M., Your Age Is 38, You Live In EG
   
   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
   // Hello Ahmed A., Your Age Is 32, You Live In SY


   //2
   let itsMe = ()=> `Iam A Normal Function`;

   console.log(itsMe()); // Iam A Normal Function

   //second function

   let urlCreate = (protocol,Web,tld) =>`${protocol}://www.${Web}.${tld}`;

   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


   //3
   let checker = (zName) => (status) => (salary) =>
   status === "Avaliable" ? `My Salary Is ${salary}` : `Iam Not Avaliable`;
 console.log(checker("Osama")("Avaliable")(4000)); // My Salary Is 4000
 console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

   //4

   function specialMix(...data) {
     let result=0;
    for(let i = 0;i<data.length;i++){
      if(isNaN(parseInt(data[i]))){
        ""
      }else{
        result += parseInt(data[i])
      }
      
    }
    if (result === 0) {
      return `All is strings`;
    }
    return result
  }

  
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings