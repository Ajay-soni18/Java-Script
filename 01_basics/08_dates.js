// We will study abouts dates 
let Today= new Date() // datatype of date is object
console.log(Today); // unable to understand
console.log(Today.toDateString());
console.log(Today.toISOString());

// To declare date
let mydate = new Date(2020,2,13) // months start from 0 based indexing
console.log(mydate.toDateString());

let current = Date.now(); // it will give me time from 1970 to right now in mili seconds
console.log(current)
//to convert in mili seconds to seconds 
console.log(current/1000); // it will give ans in decimal for integer only use floor or ceil
console.log(Math.floor(current/1000))

