let a = 10; 
let b = 20;
// 1. less than
console.log(a<b) // true

// 2. greater than
console.log(a>b) // false 

// 3. less than or equal to
console.log(a<=b) // true

// 4. greater than or equal to
console.log(a>=b) // false

let p =30;
let q = 30;
// check variable type only
// equal to
console.log(p==q) // true

// strictky check variable type and data type
console.log(p===q) // true

let e = 34;
let f = "34";
console.log(e===f) // data type are different - print -> false output
console.log(e==f) // only check types - print -> true

// not equal to
console.log(a!=b) // true