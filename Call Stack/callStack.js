// work on lifo 
// which element is recently inserted those element is remove first

// JavaScript engine uses a call stack to manage execution contexts.
// The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.

function sum(p, q){
    return p+q;
}
function doubleOfNumber(p, q){
    return sum(p, q) * 2;
}
let dbNumber = doubleOfNumber(5, 10);
console.log(dbNumber) // op ---> 30 


// using call stack find the average of number
function add(a, b){
    return a + b;
}
function averageNumber(a, b){
    return add(a, b) / 2;
}
console.log(averageNumber(10, 20))



// simple example to understand the callstack.
function myFirstFunction(){
    console.log("My first Function")
    mySecondFunction();
}
function mySecondFunction(){
    console.log("My second function")
    myThirdFunction();
}
function myThirdFunction(){
    console.log("My Third function")
}
myFirstFunction();