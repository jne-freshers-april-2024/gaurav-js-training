// let mp = new Map([
//     [Ram, 'Team Lead'],
//     [Sita, 'Manager'],
//     [gita,'Developer']
// ]);
// mp.get(Ram);


// let far = {na: "Mayank"}
// far.get(na)
//  Keys method
let ram = {name: "Ram Nam"},
    sita = {name: "sita ram"},
    gita = {name: "gita naval"};

let userRoles = new Map([
    [ram, "Manager"],
    [sita, "Lead"],
    [gita, "developer"]
])
for(const use of userRoles.keys()){
    console.log(use.name)
}

// values method
let maya = {name: "Maya Perane"},
    roy = {name: "roy Mete"},
    khaya = {name: "khaya tembe"};


let student = new Map([
    [maya, "Monitor"],
    [roy, "Sport cordinator"],
    [khaya, "Event Planner"]
])

// for(const conStudent of student.values()){
//     console.log(conStudent)
// }

// for storing the keys and values in map we use entries()
for(let [user, role] of student.entries()){
    console.log(`${user.name} and ${role}`)
}

// foEach() method
student.forEach((role, user)=>console.log(`${role} and ${user.name}`))

let allCollection = [...student.values()]
console.log(allCollection)

let allKeys = [...student.keys()]
console.log(allKeys)

// delete method
student.delete(maya)
console.log(student)

// clear()
student.clear()
// console.log(student)