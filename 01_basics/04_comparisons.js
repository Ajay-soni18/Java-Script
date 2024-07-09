// if we compare with same datatype then no problem if you compare with different datatype then it may mismatch
console.log(null>0); // false
console.log(null<0); // false
console.log(null>=0); //true 
// with undefined all gives false with 0 comparison

// triple chech === , it check value as well as datatypes 
console.log("2"===2);