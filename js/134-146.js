/*regex

i => case-insensitive
g => global
m => Multilines


Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

. => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.

  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something

 Regular Expression

  - replace
  - replaceAll
*/
//1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(/\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/.test(ip))
//2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/Os[0-9]*O/g));
//3
let phone = "+(995)-123 (4567)";
console.log(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/.test(phone));
//4
/*
https?:\/\/  starts with https://  or http://
(?   non captured group
*/
//5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|\s)(\d{2}|-)(\/|\s)\d{2,4}(\s-\s\d{4})?/g; 

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
//6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
 re = /(https?|\w+)(.|:\/\/)\w+.\w+(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)/g;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));