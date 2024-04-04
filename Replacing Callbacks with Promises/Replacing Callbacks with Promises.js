// callback example
function asyncOpear(callback){
    setTimeout(function(){
        const res = Math.random();
        callback(res)
    }, 2000)
}
asyncOpear(function(res){
    console.log("Result is ", res)
})

// replacing callback with promise
function replaceWithPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const res = Math.random();
            resolve(res);
        }, 3000)
    });
}
replaceWithPromise()
.then(function(res){
    console.log("Result " , res)
})
.catch(function(error){
    console.log("Error ", error)
});