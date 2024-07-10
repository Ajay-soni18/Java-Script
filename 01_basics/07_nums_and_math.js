// // to declare number
// const score= 700
// console.log(score);
// const balance = new Number(15)
// console.log(balance)
// // some inbuilt function
// console.log(score.toString()); // convert into the string
// console.log(score.toString().length); // no of digits
// console.log(score.toFixed(2)); //it will show 2 digit after decimal 700.00

// // for precision
// const newnum = 182.9867
// console.log(newnum.toPrecision(5)); // no of digit you want after precision
// const bignum=10000000000068281 // huge number difficult to read
// console.log(bignum.toLocaleString('en-IN')); // by defualt use standard , for indian standard 'en-IN' 10,00,00,00,00,00,68,280

// ***************************Maths**********************************************************
// console.log(Math);
// console.log(Math.abs(-56728));
// console.log(Math.round(7818.99)); // ceil round of to upper , floor round of to lower

// console.log(Math.random()) // gives value between 0 to 1
const min = 1
const max = 7
// let say you have to design dice 
console.log(Math.floor(Math.random()*(max-min+1)+min));