//reduce

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc, currentval){
//     console.log(`acc: ${acc} and cur: ${currentval}`)
//     return acc+currentval
// }, 0)

// console.log(myTotal)

//using arrow func
const myTotal = myNum.reduce((acc,currentval)=> acc+currentval,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 299
    },
    {
        itemName: 'python course',
        price: 899
    },
    {
        itemName: 'java course',
        price: 999
    }
]

const total = shoppingCart.reduce((acc, item)=> acc+item.price ,0)

console.log(total)