function countNumber(count){
    console.log(count);
}
countNumber(5)
countNumber(4)
countNumber(3)
countNumber(2)
countNumber(1)


function countADta(countNum){
    console.log(countNum);
    let nextNum = countNum -1;
    if(nextNum > 0){
        countADta(nextNum)
    }
}
countADta(5)