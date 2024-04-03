// x ||= y
// Logical OR assignment operator (||=)
let cat;
cat ||= "tiger"
console.log(cat)

let bag = "New Bag";
bag ||= "bag"
console.log(bag)

// Logical AND assignment operator (&&=)
let student = {
    firstName: 'Krish',
    lastName: 'Rayna',
};

student.lastName &&= 'Dimpi';

console.log(student);

// Nullish coalescing assignment operator (??=)
let user = {
    username: 'Success'
};
user.nickname ??= 'Cyber';

console.log(user);