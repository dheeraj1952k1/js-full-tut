// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
}) (); // semocolon must be there to invoke the iife function


// global scope ke declaration se problem hoti hai to us
// global scope ke pollution ko remove karne ke liye iifi ka prayog karte hai

((name)=>{
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

// two iife can be written using semicolon