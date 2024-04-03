// 1. one way
let arr = ["java", "Python", "react", "next", "Express"];

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// 2. second way
let aa = new Array("A", "B", "C", "D");
console.log(aa[0])


// 3. third way
let bn = [];
bn[0] = "P";
bn[1] = "Q";
bn[2] = "R";
console.log(bn)
// Array methods


// sorting is done on string by default
let op = ["Hello", "Abhay", "Zebra", "Tang", "Bottle"]
let s = op.sort();
console.log(s)

// Sorting on number
let ty = [89, 23, 45, 6, 2, 1];
// let so = ty.sort((a, b) =>a- b); 
// console.log(so)

let so1 = ty.sort((a, b)=>b-a);
console.log(so1)