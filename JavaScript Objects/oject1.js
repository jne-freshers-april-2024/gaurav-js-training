let user = [
    {
        id: 11,
        name: "Ram",
        age: 23
    },
    {
        id: 22,
        name: "Sita",
        age: 20
    },
    {
        id: 22,
        name: "Lakshiman",
        age: 17
    }
]
let fil = user.filter((a)=>{
    return a.age>=20;
})
console.log(fil)

let ini = user.includes("Sita");
console.log(ini)

let mp = user.map((a)=>{
    return a.name
})
console.log(mp)

let fid = user.find((item)=>{
    return item.name === "Ram";
})
console.log(fid)

user.forEach((a)=>{
    console.log(a.age)
})

let som = user.some((item)=>{
    return item.id<20;
})
console.log(som)

let evr = user.every((item)=>{
    return item.id <= 22;
})
console.log(evr)

let rd = user.reduce((currentValue, item)=>{
    return item.id + currentValue;
}, 0)
console.log(rd)

const data = [1, 2, 3, 4, 5, 6];
const incl = data.includes(3);
console.log(incl)
