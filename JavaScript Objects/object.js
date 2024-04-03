let student = {
    id: 101,
    name: "Ram",
    branch: "Engineering"
}
console.log(student)

let newStudent = {
    id: 202,
    name: "Sita",
    greet: function(){
        console.log("Good Afternoon");
    }
}
console.log(newStudent)
newStudent.greet()

let obj = new Object();
obj = {
    task: "JavaScript",
    data: "Fresher Members"
}
console.log(obj)

// another way to create object using this keyword
let p = new person("Ram", "Roy");
function person(fisrtName, lastName){
    this.fisrtName = fisrtName;
    this.lastName = lastName;
}
console.log(p.fisrtName +" "+ p.lastName)


// class and constructor
class myData{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    getFullName(){
        return this.fname+" "+ this.lname;
    }
}
let m = new myData("Ritik", "Patil")
console.log(m.getFullName())