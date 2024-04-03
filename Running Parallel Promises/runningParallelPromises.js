// Running parallel promises in JavaScript allows you to execute multiple asynchronous operations simultaneously and wait for all of them to complete. 

//Promise.all() -- > method of Promise()
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("First");
        resolve(10)
    }, 1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second");
        resolve(20)
    }, 3000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Third")
        resolve(30)
    }, 3000);
})
Promise.all([p1, p2, p3])
.then((r)=>console.log(r))