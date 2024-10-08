// for of

//syntax
// for (const element of object) {
    
// }

//array
const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num)
// }


//on string
const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char id ${greet}`)
// }

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
//Adding duplicate but the o/p will have unique values and in same order
map.set('IN', "India")

//console.log(map);

// for (const key of map) {
//     console.log(key)
// }
//or
// for (const [key,value] of map) {
//     console.log(key,":-",value)
// }


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,":-",value)
}
