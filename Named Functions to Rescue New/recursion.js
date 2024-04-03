// recursion function example - factorial of number
function myFactorial(n){
    if(n == 0 ||  n==1){
        return n;
    }else{
        return n * myFactorial(n-1)
    }
}
let number = 5;
let result = myFactorial(number);
console.log(`Factoral of ${number} is ${result}`);