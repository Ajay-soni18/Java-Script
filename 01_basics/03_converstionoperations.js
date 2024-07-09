// let score1 = "33"
// console.log(typeof score1);

// let ValueInNumber=Number(score1); // convertion from string to number
// console.log(typeof ValueInNumber);
// console.log(score1);

// let score2="123ab" // what if we convert this into number
// let ValueInNumber2=Number(score2)
// console.log(typeof ValueInNumber2); // it will covert in number but when we print 
// console.log(ValueInNumber2) // give output = NaN (Not a Number)
// // "33"=>33
// // "33abs"=> NaN
// // true => 1 ; false =>0
// // null => 0 , undefined => NaN

// let bool = 1
// console.log(typeof bool);
// let inboolean = Boolean(bool)
// console.log(inboolean);

// in boolean 0=> false; 1=>true; ""=> false , "ajay"=>true
// we can also covert into string String()
//*******************************operation*************************************************
console.log("1"+2+3); // after string it will treat all as string
console.log(1+2+"2"); // if arithmetic operation happen then it will add to the string 

let x=4
let y=x++  //postfix increment 
console.table([x,y]); // x=5 y=4
