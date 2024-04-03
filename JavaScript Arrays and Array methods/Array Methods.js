let arr = ["java", "python", "react", "next", "node", "express", "sql"];
// length
console.log(arr.length)

// at()
let at1 = arr.at(2)
console.log(at1)

// join()
let join1 = arr.join(" $ ");
console.log(join1)

// push()
let fruit = ["Mango", "Apple", "Grapes", "Anjeer", "Chiku"]
fruit.push("maka");
console.log(fruit)

// pop()
// let rem = fruit.pop();
// console.log(rem)

// shift()
fruit.shift()
console.log(fruit)

// unshift()
fruit.unshift("Dalimb")
console.log(fruit)

// length
console.log(fruit.length)

// concat()
let boy = ["Rakesh", "Ram"];
let girl = ["Sita","A"];
console.log(boy.concat(girl))

// copyWithin()
fruit.copyWithin(2, 0, 2);
console.log(fruit)

// flat()
const chn = [[1,2],[3,4],[5,6]];
let chn1 = chn.flat();
console.log(chn1)

// splice() 
let gh = ["A", "B", "C", "D", "E"];
gh.splice(2, 0, "P", "Q");
console.log(gh)

gh.splice(0,1)
console.log(gh)

// toSpliced()
const months = ["jan","feb","march","april","may","june"];
const spil = months.toSpliced();
console.log(spil)

// slice()
const slice1 = months.slice(1);
console.log(slice1)

// toString()
const tostr = months.toString();
console.log(tostr)

// indexOf()
const indof = months.indexOf("jan")+1;
console.log(indof)

// lastIndexOf()
const lindof = months.lastIndexOf("march")+1;
console.log(lindof)

// includes()
const incl = months.includes("feb");
console.log(incl)

// find()
let num = [12, 34, 45, 56, 6, 8];
const fin = num.find(e=> e === 8);
console.log(fin)

// reverse()
let rev1 = ["Z", 'P', `K`, "H", 'O'];
rev1.reverse();
console.log(rev1)

// sort()
let sot = rev1.sort();
console.log(sot)

// toReversed()
let more = months.toReversed();
console.log(more)

// forEach()
let num1 = [12,3, 4, 67, 8, 2];
num1.forEach((size, index, array)=>{
    console.log(size, index, array)
})

// map()
let mp = num1.map((size, index, array)=>{
    return size, index, array;
})
console.log(mp)

// filter();
let fil = num1.filter((a)=>{
    return a>65;
})
console.log(fil)

// reduce()
let red = num1.reduce((a)=>{
    return a*a*a;
})
console.log(red)

// flatMap()
let flt = num1.flatMap((x)=> x * 2);
console.log(flt)