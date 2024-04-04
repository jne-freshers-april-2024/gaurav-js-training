// Promise.resolve()
let p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let a = 45;
        let h = "45";
        if(a === h){
            resolve("Same")
        }else{
            reject("Different")
        }
    }, 2000);
})
Promise.resolve(p)
.then((r)=>console.log(r))
.catch((c)=>console.log(c))
// romise.reject()