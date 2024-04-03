function sqNum(a){
    a = a * a;
    return a;
}
let result = sqNum(10);
console.log(result)

let student = {
    id: 101,
    name: "Ritik",
    age: 23
};
function changeAge(obj){
    obj.age +=1;
}
changeAge(student)
console.log(student)

