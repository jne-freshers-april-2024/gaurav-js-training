// Closure
let name = "Thinkitive";
function greetingMsg(){
    let msg = "Good Afternoon";
    console.log(msg+" "+name)
}
greetingMsg();


function myFirstFuncton(){
    let age = 23;
    function mySecondFunction(){
        console.log("Age is " + age);
    }
    mySecondFunction()
}
myFirstFuncton()

// another way
function newFunction1(){
    let msg = "Greeting of the day";
    function mynewFunction2(){
        console.log(msg)
    }
    return mynewFunction2;
}
let hi = newFunction1();
hi()

function greeting(message){
    return function(name){
        return message +" "+ name;
    }
}
let sayHi = greeting("hii");
let sayHello = greeting("hello");
console.log(sayHi('Ram'))
console.log(sayHello('Sham'))

// JavaScript closures in a loop
for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log("after " + i + " second " + i);
    }, i * 1000)
}

// Using the IIFE solution
for(let i=1;i<=5;i++){
    (function(i){
        setTimeout(function(){
            console.log("After " + i + " Seconds " + i)
        }, i*1000)
    })(i)
}

// Using let keyword in ES6
for(let i=1;i<=5;i++){
    setTimeout(function() {
        console.log("After " + i + " Seconds " + i)
    }, i * 1000);
}