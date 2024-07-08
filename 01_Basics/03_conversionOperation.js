//let score = 66; //number
//let score = "66"; //string
//let score = "66abc"; //number NaN
//let score = null; //number 0
//let score = undefined; //number NaN
let score = true

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN 
//true =>1, false =>0

console.log("--------")
//let isLoggedIn = 1
//let isLoggedIn = ""
let isLoggedIn = "Pranav"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "Pranav" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
