// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // to run () , to separate two IIFE ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')