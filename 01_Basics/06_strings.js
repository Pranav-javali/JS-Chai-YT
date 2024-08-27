const name = "Pranav"
const repo = 29

//console.log(name+repo+" value")

console.log(`Hello my name is ${name} and my repo count is ${repo} `)

const gameName = new String("Pranavrj")

console.log(gameName[0])

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    dwccd    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://pranav.com/pranav%20javali"

console.log(url.replace('%20','_'))

console.log(url.includes('pranav'))