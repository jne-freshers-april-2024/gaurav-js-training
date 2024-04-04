// hoisting is possible with only var keyword beacause var is function scope and let const both are block scope.
// before declaration we can use variables this process is called as the hoisting.

// hoisting is possible in variables as well as function


// 1. variable hoisting
age = 34;
console.log(age)
var age;


// 2. functon hoisting 
let result = sum(10, 20);
console.log(`Sum is ${result}`)

function sum(a, b){
    return a + b;
}

// another example
var ram = 10, sita = 20;
var totalCount = averageNumber(ram, sita);
console.log("Average of number is " + totalCount);
function averageNumber(ram , sita){
    return (ram+sita)/2;
}