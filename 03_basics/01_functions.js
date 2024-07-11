function product(number1 , number2 /*they arey called parameters*/ ){
    console.log(number1*number2);
}

product(2,3)
product(2,"a") // give NaN

function loginUserMessage(username = "sam" /* if no value given it takes by defualt */ ){ 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // same 
console.log(loginUserMessage("Ajay")) // ajay

// Rest operator , when you do not know how many parameter  will come in function use rest example shopping cart

function cartvalue(...nums){
    return nums
}

function cartvalue(val1 , val2 , ...nums){ // val1 take 100 val2 takes 200 and rest of will be in array with nums
    return nums
}

console.log(cartvalue(100,200,399)) //[ 100, 200, 399 ] output
