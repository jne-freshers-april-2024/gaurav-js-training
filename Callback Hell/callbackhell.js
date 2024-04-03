// CallbackHell 
function callHell(callback){
    setTimeout(function(){
        console.log("First")
        callback();
    }, 1000)
}
function callHell2(callback){
    setTimeout(function(){
        console.log("Second");
        callback()
    }, 1000)
}
function callHell3(callback){
    setTimeout(function(){
        console.log("Third");
        callback();
    }, 1000);
}
callHell(function(){
    callHell2(function(){
        callHell3(function(){
            console.log("All Tasks of callback hell");
        });
    });
});