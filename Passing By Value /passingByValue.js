// Passing By Value 
function myTest(number){
    number *= 2;
    return number;
}
let number = 10;
let prevNumber = myTest(number);
console.log(number);
console.log(prevNumber)

function myString(str){
    str = str.split(" ");
    return str;
}
let str = "I am join thinkitive technologies pvt ltd pune";
let output = myString(str);
console.log(str);
console.log(output)