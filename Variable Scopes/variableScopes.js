// local variable
var msg = "Good Morning";
function greeting(){
    var msg = "Good Afternooon";
    console.log(msg)
}greeting();
console.log(msg)

// another example
const name = "Mayank";
function printName(){
    console.log(name)
}
printName();

// Another example to understand

function myFirst(){
    let age = 22;
    function mySecond(){
        console.log(age);
    }
    mySecond();
}
myFirst();

// without use strict mode in javascript
function myTest(){
    // Global variable leaks: the weird part of JavaScript
    paragraph = "Hii we start the new position as software engineer";
    return paragraph;
}
console.log(myTest())


// using strict mode
// function myTestWithStrictMode(){
//     'use strict'
//     age = 20; // throws an error --> not defined
//     return age;
// }
// console.log(myTestWithStrictMode())

// using strict mode
function tryStrictMode(){
    'use strict'
    let age = 20;
    return age;
}
console.log(tryStrictMode())