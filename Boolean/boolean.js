
let comp = true;
let act = new Boolean(false);
console.log(typeof comp);
console.log(typeof act);

console.log(comp instanceof Boolean);
console.log(act instanceof Boolean);

let falseObj = new Boolean(true);
if (falseObj) {
    console.log('weird part of the Boolean object');
}

let a = true;
console.log(a)

let b = true;
console.log(b)

if(a && b){
    console.log("same")
}else{
    console.log("Different value")
}