// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3455756674646767667n;

//Reference type(non-primitive)

//Array, Objects, Functions

const heros = ["Ironman", "Thor", "Spiderman"]

let myObj = { name: "Pranav",
            age: 23, }

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(non-primitive)

let myName = "Pranav"

let anotherName = myName

anotherName = "Don"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pranav@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)