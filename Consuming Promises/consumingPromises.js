let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(34);
        console.log("Resolve")
    }, 2000)
})
.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})