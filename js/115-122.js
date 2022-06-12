//1 

let myNumbers = [1, 2, 3, 4, 5];

 [a,b,c,d,e]=myNumbers;
console.log(a * e); // 5


//2

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

 [a, b, c, [d, e, [f, g]]]=mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


//3

arr1 = ["Ahmed", "Sameh", "Sayed"];
arr2 = ["Mohamed", "Gamal", "Amir"];
arr3 = ["Haytham", "Shady", "Mahmoud"];

 finalArr= arr1.concat(arr2).concat(arr3);
<<<<<<< HEAD
 console.log(finalArr);
=======
>>>>>>> e4807bb9da364bceeaf784cce4ae2028a7089073
 [c, , , , , , , a, b]=finalArr;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//4

 member = {
     age: 30,
     working: false,
     country: "Egypt",
     hobbies: ["Reading", "Swimming", "Programming"],
   };
   
  ({age : a,working : w,country :c,hobbies:[h1,,h3]}=member);
   
   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
   // My Age Is 30 And Iam Not Working
   
   console.log(`I Live in ${c}`);
   // I Live in Egypt
   
   console.log(`My Hobbies: ${h1} And ${h3}`);
   // My Hobbies: Reading And Programming

   //5

   const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  // Write Your Destructuring Assignment/s Here
  ({title:t,developer:d,}=game);
  
  [o,a,or]=Object.keys(game.releases);

  [u,j]=game.releases["Oath In Felghana"];

  ({US:u_price,JAP:j_price}=game.releases["Ark Of Napishtim"]);


  console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD