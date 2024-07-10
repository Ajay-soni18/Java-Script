const array1=[1,2,3,4,5,6]
const array2=[7,8,9,10]

// array1.push(array2) // it will push array2 inside the array1
// console.log(array1)

// concept of spread 
const array = [...array1 , ...array2] // merge both the array , if more than two , also works
console.log(array)

// concept of flat when array inside array , flat convert all of them into single

const temp1=[1,2,3,[4,5,6,[7,8,9]],10,[11,12]]
const temp2 = temp1.flat(Infinity) // take depth till where need to flat for full array you can give infinity
console.log(temp2)

console.log(Array.isArray("ajay")) // give boolean 
console.log(Array.from("Ajay")); // convert into array

let a=10;
let b=20;
let c=30;
console.log(Array.of(a,b,c)) // convert into array 