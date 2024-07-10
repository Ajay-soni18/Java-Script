// to declare string 
const first="hello" // method no1
const second= new String('HELLO') // method no2

console.log(`just say ${first} , in capital just say ${second} to me`); // better way to print 
// Note that above these are not single quotes they are backticks abose tab button
// there are some inbuilts function which can be applied on string

console.log(first.toUpperCase());
console.log(first.length);
console.log(first.substring(0,2)) // (start index , end index) it will bot include the end index
console.log(first.charAt(2)) // it will give char on given index
console.log(second.indexOf('L')); // it will give index of 1st occurance
// in slice you cam give negative start index to print in reverse order
const neww = first.slice(-7,1);
console.log(neww);
// to trim spaces in start or end 
const farzi="                ajay                         "           
console.log(farzi);
console.log(farzi.trim());

// to replace any words in string

let url="ajaysoni%20mnitjaipur.com"
console.log(url.replace('%20','-')); // (what to replace , whom to replace)

// to split the string 
console.log(url.split('%20')); //[ 'ajaysoni', 'mnitjaipur.com' ]

