// Promise.any()
let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise reject");
        reject('error')
    }, 1000);
})
let p2 = new Promise((resolve, reject)=>{
    console.log("Promise resolved");
    resolve(45);
}, 2000)

const p = Promise.any([p1, p2])
p.then(v=>{
    console.log(v)
})