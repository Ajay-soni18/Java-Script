// we learnt about datatypes earlier 
// in java script two types of memory availble 1st is stack and 2nd is heap
// For primitive datatypes stack is used , they create as a copy
// for non primitive type datatypes heaps is used , they keep as reference 

let details1 = { // syntax to create objects
    email : "ajaysoni@gmail.com",
    number : 729696
}

let copy= details1

// if i change in details 1 , automatically changes in copy

details1.number=960288

console.log(copy.number); // gives 960288 

// for primitive datatype it will create copy. not send by references