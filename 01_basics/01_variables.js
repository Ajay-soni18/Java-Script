const accountId=12321 // considered as constant cant change in future
let accountEmail="ajaysoni@gmail.com" // use to declare variable
var accountPassword="123" // it is also considered as variable 
let accountState // this is undefined

/*
prefer not to use var because of issue in block scope and functional scope.
use let for varibales.
*/
accountCity="Jaipur"

console.log(accountEmail);     // to print

//to print in table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])