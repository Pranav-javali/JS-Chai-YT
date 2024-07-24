//const myArr = [0,1,2,3,4,5,true,"Pranav"]

const myArr = [0,1,2,3,4,5]
console.log(myArr)

//Accessing element in array using index position
// console.log(myArr[0])

//Another way to declare array
const myHeros = ["Iron man", "Shakthiman"]
// console.log(myHeros)

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2)

//Array Methods

console.log("PUSH")
myArr.push(6)   //Add element 6 at the last
console.log(myArr)

console.log("POP");
myArr.pop()    //last element gets removed 
console.log(myArr)

console.log("UNSHIFT");
myArr.unshift(9)
console.log(myArr);

console.log("SHIFT");
myArr.shift()
console.log(myArr);


console.log("-----------------")

console.log(myArr.includes(9))   //give element in parameter
console.log(myArr.includes(3))

console.log(myArr.indexOf(9))    //give index in parameter
console.log(myArr.indexOf(4))


console.log("-----------------")

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


console.log("-----------------")
//Slice, Splice

console.log("A-> ",myArr)
const myn1 = myArr.slice(1,3)
console.log("After slice ",myn1)

console.log("B-> ",myArr)
const myn2 = myArr.splice(1,3)
console.log("After splice ",myn2)

console.log("C-> ",myArr)