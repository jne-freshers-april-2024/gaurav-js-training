// Promise.all()
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("First Promise")
        resolve(1)
    }, 1000)
});
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second Promise");
        resolve(2)
    }, 2000)
});
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Third Promise")
        resolve(3)
    }, 3000);
});
Promise.all([p1,p2,p3]).then((result)=>{
    const promAll = result;
    console.log(promAll)
})