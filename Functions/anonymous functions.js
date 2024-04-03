const show = ()=>{
    console.log("My JS Function")
}
show();

const data = (message)=>{
    return message;
}
let d = data("Greeting of the day");
console.log(d)


// other example
let student = {
    id: 101,
    name: "Ram",
    year: "BE.Comp"
};
(function (){
    console.log(`Student id is ${student.id} and name is ${student.name} and year is ${student.year}`)
})(student);

// simple way 
let mySum = (a, b)=> a + b;
let r = mySum(10, 10);
console.log(r)

// another way
let sumOf = function(p, q){
    return p + q;
}
let n = sumOf(30, 40);
console.log(n)