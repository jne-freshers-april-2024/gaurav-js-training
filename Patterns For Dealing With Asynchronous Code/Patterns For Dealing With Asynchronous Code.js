function myFun(){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            resolve(56)
        }, 3000)
    })
}
let fun = myFun();
console.log(fun)

async function correct(){
    let a = 67;
    if(a == 67){
        console.log("Same")
    }
}
async function main(){
    let as = await correct();
    console.log(as)
}
main()