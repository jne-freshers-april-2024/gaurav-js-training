// Promise.race()
let p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("First")
        resolve(1)
    }, 2000);
})
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second");
        resolve(2)
    }, 3000)
})
Promise.race([p, p1])
.then(r=>console.log(r))
.catch(rj=>console.log(rj))