//1

let dateNow = new Date();
let myBirthday =  new Date("Oct 25, 82");

let dateDiff = dateNow - myBirthday;


console.log(`${(dateDiff / 1000).toFixed()} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed()} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30).toFixed()  } Months`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24  / 365).toFixed()} Years`);


//2

