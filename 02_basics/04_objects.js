// const obj1 = { 1: "a" , 2: "b" , 3:"c"}
// const obj2 = { 4: "d" , 5: "e" , 6:"f"}

// // merging two object 
// const obj = Object.assign(obj1 , obj2) // obj2 is merging in obj1
// const objj = Object.assign({},obj1,obj2) // obj1 and obj2 merging in {}

// // console.log(obj);
// // console.log(objj); 

// const objjj={...obj1,...obj2} // spreading object method
// console.log(objjj); 

// // to separate out keys and values 
// console.log(Object.keys(objjj)); // they will be present in array you can perform array opretaions
// console.log(Object.values(objjj));

// // to separate all they keys with their value 
// console.log(Object.entries(objjj)) //array wthin array [[key,value].....]

const obj ={
    myname : "Ajay",
    living : "Bidasar",
    Age:21
}

const {myname : nm}=obj  // will use in react more frequently called destructing 

//console.log(myname) // to access directly
console.log(nm) // to access with short key