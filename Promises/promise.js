let p = new Promise((resolve, reject)=>{
    setInterval(() => {
        let a = 45;
        let b = 5;
        if(a == b){
            resolve(56)
        }else{
            reject("reject")
        }
    }, 2000);
}).then(()=>{
    console.log("Success")
}).catch(()=>{
    console.log("failed")
})