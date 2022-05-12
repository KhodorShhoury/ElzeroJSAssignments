
   
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


// Needed Output

/*
"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"
*/
//2
let dateEditted = new Date();

dateEditted.setFullYear(1980);
dateEditted.setHours(0);
dateEditted.setMinutes(0)
dateEditted.setSeconds(1);
console.log(dateEditted);

// Needed Output

//"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"