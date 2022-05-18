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
let dateEditted = new Date("80");
dateEditted.setSeconds(1)
console.log(dateEditted);

// Needed Output

//"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

//3

let lastDayDate = new Date();
lastDayDate.setDate(0)
console.log(lastDayDate)

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

console.log(`Previous Month is ${monthNames[lastDayDate.getMonth()]} and the last day is ${lastDayDate.getDate()}`)


//4


let myBirtday2 = new Date("1982 10 25");
console.log(myBirtday2)


let myBirtday3 = new Date("1982@10@25");
console.log(myBirtday3)


let myBirtday4 = new Date("1982/10/25");
console.log(myBirtday4)



//6

function* gen(){
  let index = 14;
  
  while(true){
    yield index *=11;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}