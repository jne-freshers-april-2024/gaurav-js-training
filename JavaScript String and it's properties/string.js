let s = "Thinkitive Technologies"
console.log(s)

let s1 = 'Thinkitive First Office ';
console.log(s1)

let s2 = `Thinkitive second Office`;
console.log(s2)

console.log(s1+s2)

// String Methods
console.log(s.length)

// charAt()
let t = "Information Technology";
let char = t.charAt(12)
console.log(char);

// charCodeAt()
let a = "Java Developer";
let cc = a.charCodeAt(0);
console.log(cc)

// at()
let b = "React";
let word = b.at(3);
console.log(word)

// slice(start, end)
let fruits = "Apple, Mango, Cherry";
let pf = fruits.slice(7, 12);
console.log(pf)

let p1 = fruits.slice(-7)
console.log(p1)

// substr()
let sub = fruits.substring(7)
console.log(sub)

// toUpperCase()
let f = "thinkitive";
let up = f.toUpperCase();
console.log(up)

// loLowerCase()
let e = "THINKITIVE";
let low = e.toLowerCase();
console.log(low)

// concat()
let g = "Hello";
let h = "Thinkitive";
let text = g.concat(" ", h);
console.log(text)

// trim()
let wod1 = "  Hello  ";
let tr = wod1.trim();
console.log(tr)

// trimEnd()
let wod2 = "  Jay Shree Ram      ";
let tr1 = wod2.trimEnd();
console.log(tr1)

// trimStart()
let wod3 = "    create something";
let tr3= wod3.trimStart();
console.log(tr3)

// padStart()
let wod4 = "5";
let pd = wod4.padStart(4, "x")
console.log(pd)

// padEnd() 
let wod5 = "5"
let pd1 = wod5.padEnd(4, "*");
console.log(pd1)

// repeat()
let wod6 = "Repeat word ";
let r1 = wod6.repeat(4);
console.log(r1)

// replace()
let wod7 = "Thinkitive Softwares";
let rep = wod7.replace("Softwares", "Technologies");
console.log(rep)

let para = "Please visit Google and Google";
let rep1 = para.replace(/Google/g, "Microsoft")
console.log(rep1)

let para1 = "java, Python, java, react, next";
let rpf = para1.replaceAll("java", "node")
console.log(rpf)

// split();
let para3 = "This is my string i want to split into small piece of part";
let spl = para3.split(" ");
for(let i=0;i<spl.length;i++){
    console.log(spl[i])
}

// indexOf()
let para4 = "Counting of words in this paragraph of last paragraph";
let ind = para4.indexOf("of");
console.log(ind)

// lastIndexOf()
let lst = para4.lastIndexOf("of")
console.log(lst)

// search()
let sr = para4.search("in");
console.log(sr)

// match()
// let mt = para4.match("paragraph");
let mt = para4.match(/paragraph/g);
console.log(mt)

// matchAll()
const iterator = para4.matchAll(/of/gi);
console.log(iterator)

// includes()
let inc = para4.includes("this");
console.log(inc)

// startsWith()
let stw = para4.startsWith("Counting")
console.log(stw)

// endsWith()
let ew = para4.endsWith("paragraph");
console.log(ew)