let arr = [12, 34, 2, 3, 5];
// for of loop
for(const element of arr){
    console.log(element)
}

// forEach method
arr.forEach((t=>console.log(t)))

// for in loop
for(const index in arr){
    console.log(index)
}