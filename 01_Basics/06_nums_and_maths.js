const score = 400

// console.log(score)

//Explicitly
const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)

// console.log(balance.toFixed(2))

const otherNum = 123.8769
// console.log(otherNum.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++ MAths ++++++++++++

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.abs(4))

console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(4.3))
console.log(Math.ceil(4.6))

console.log(Math.floor(4.3))
console.log(Math.floor(4.6))

console.log(Math.min(4,3,5,7))
console.log(Math.max(4,3,5,7))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+10)