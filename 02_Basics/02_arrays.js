const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Batman", "Flash"]
console.log(marvel)
console.log(dc)

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])

const all_heros = marvel.concat(dc)
console.log(all_heros)

//spread operator
const all_new_heros = [ ...marvel, ...dc]
console.log(all_new_heros)


console.log("----------------------")

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log("----------------------")

console.log(Array.isArray("Pranav"))

console.log(Array.from("Pranav"))

console.log(Array.from({name:"hitest"}))  //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))