const myarr=[1,2,3,4,"ajay",true] // single array can have multiple data types.
const newarr= new Array(1,2,2,7,"soni") // another way to declare array
// You can perform operations on array as c++
// console.log(myarr.includes(3)) // gives output in true or false
// console.log(myarr.indexOf(4)) // give the index of given input
//const stringarr = myarr.join() // this will convert array into the string 
// console.log(myarr) // ACTUAL
// console.log(stringarr) // DATATYPE :- STRING

// THERE ARE TWO OPERATION SLICE AND SPLICE
console.log("A" , myarr) // Printing original array
const temp1 = myarr.slice(1,4); // 4th index doesn't count
console.log(temp1) // printing after slice operation
const temp2 = myarr.splice(1,4); // it substrack 1 , 2 , 3 , 4 index from original array am=nd modify original array
console.log(temp2);
console.log("B",myarr) // original array after splice operation