// umber.EPSILON is the difference between the smallest floating point number greater than 1 and 1.
let a = Number.EPSILON
console.log(a)

//Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
let b = Number.MAX_VALUE
console.log(b)


// Number Properties Cannot be Used on Variables

// Number properties belong to the JavaScript Number Object.

// These properties can only be accessed as Number.MAX_VALUE.

// Using x.MAX_VALUE, where x is a variable or a value, will return undefined:
// let x = 34;
// console.log(x.MAX_VALUE)

// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

let d = Number.MIN_VALUE
console.log(d)

// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

// Number.MAX_SAFE_INTEGER is (253 - 1).

let e = Number.MAX_SAFE_INTEGER
console.log(e)

// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

// Number.MIN_SAFE_INTEGER is -(253 - 1).

let f = Number.MIN_SAFE_INTEGER
console.log(f)

let po = Number.POSITIVE_INFINITY;
console.log(po)

let neg = -1/0;
console.log(neg)

let na = Number.NaN;
console.log(na)

let g = 100 / "fruits";
console.log(g)