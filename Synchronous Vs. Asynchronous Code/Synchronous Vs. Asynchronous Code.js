// Synchronous Vs. Asynchronous Code*
// Synchronous 
// line by line execution
console.log("A")
console.log("B")
console.log("C")
console.log("D")

// Asynchronous Code*
console.log("Hii");
setTimeout(()=>{
    console.log("Good Afternoon")
}, 4000)
console.log("Good Evening")

let p = new Promise((resolve, reject)=>{
    setInterval(()=>{
        resolve(67);
    }, 2000)
}).then(()=>{
    console.log("Success")
}).catch(()=>{
    console.log("failed")
})