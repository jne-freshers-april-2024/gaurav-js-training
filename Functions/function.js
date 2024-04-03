function myData(){
    console.log("Hello")
}
myData();


function numData(a, b){
    return a+b;
}
let result = numData(12, 13);
console.log(result)


function greeting(message){
    return message;
}
let msg = greeting("Good Morining!!!")
console.log(msg)


// callback Function in Javascript

function first(a, b, callback){
    let result = a + b;
    callback(result)
}
function second(result){
    console.log(result)
}
first(100, 200, second)