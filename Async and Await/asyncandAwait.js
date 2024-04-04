console.log("A")
console.log("B")
console.log("C")
console.log("D")
console.log("E")

async function nextFunc(){
    setTimeout(()=>{
        console.log("hello")
    }, 2000)
}
async function main(){
    await nextFunc()
    console.log("After a await keyword");
    console.log("After a await keyword 2");
    console.log("After a await keyword 3");
}
main()