const register = {
    username : "Ajay",
    price : 999,
    state : "Rajasthan",
    welcome : function (){
        console.log(`Hey! Thank-You for Paying ${this.price},Glad to know you are from ${this.state}`)
    }
}
// register.welcome()
// register.price=100
// register.welcome()
// this.--- works in object not only on function
// example:-
// function protein(){
//     let username = "shake"
//     console.log(this.username) // undefined output
// }
// protein()

//+++++++++++++++++++++++++ arrow function +++++++++++++++++++++
 // syntax of array function
// const addTwo = (nums1 , num2) => {
//     return num1+num2
// }

// implicit return 
const addtwo = (nums1,nums2) => (nums1+nums2) // donot need two write return 

console.log(addtwo(1,2))