//1
let start = 10;
let end = 100;
let exclude = 40;
for(let i = start;i<=end;i+=start){
     if(i==exclude){
          continue
     }
     console.log(i)
}

//2

 start = 10;
 end = 0;
let stop = 3;

for(let i =start ; i>=end;i--){
     
     if(i<start){
          console.log(`0${i}`)
         
     }else{
          console.log(i);
     }
     if(i== `0${stop}`){
          break
     }
}

//3

 start = 1;
 end = 6;
let breaker = 2;

for(let i =start;i<=end;i++){
     console.log(`${i}
     --${breaker}
     --${end - breaker}`)
}

//4

let index = 10;
let jump = 2;
 end = 0;

for (;;) {
     if (index === jump) break;
      if (index > end) {
    console.log(index);
    index -= jump;
  }
  
}
//5

 friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = --letter.length;i<friends.length;i++){
     if(friends[i].charAt(0)==letter.toUpperCase()){
          continue
     }
     console.log(`${i}=>${friends[i]}`)
}

//6

 start = 0;
let swappedName = "elZerO";

 result = "";
for(let i =start ; i<swappedName.length;i++){
     if(swappedName[i]==swappedName[i].toUpperCase()){
          result += swappedName[i].toLowerCase()
     }else result+= swappedName[i].toUpperCase()
}
console.log(word);

//7
 start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i=++start;i<mix.length;i++){
     if(typeof mix[i] == "string"){
          continue
     }
     console.log(mix[i])
}