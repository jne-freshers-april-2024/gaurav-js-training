let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolve promise")
        resolve(10);
    }, 2000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise Reject");
        reject(20)
    }, 3000)
})
Promise.allSettled([p1, p2])
.then((r)=>{
    console.log(r)
})