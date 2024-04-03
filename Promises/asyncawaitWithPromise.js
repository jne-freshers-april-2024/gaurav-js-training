// async/await
async function myFunc(){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            resolve(45);
        }, 2000)
    })
}
async function main(){
    let b = await myFunc();
    console.log(b)
}
main()