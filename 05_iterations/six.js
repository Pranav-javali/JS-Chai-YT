const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num > 4) //implicit return using arrow func

// const newNums = myNums.filter((num)=> {
//    return num > 4
// })

//console.log(newNums)

const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
//console.log(newNums)

const books = [
    {
        title: 'Book one', genre: 'Fiction', publish: 1998, edition: 2008
    },
    {
        title: 'Book two', genre: 'Non-Fiction', publish: 1968, edition: 2006
    },
    {
        title: 'Book three', genre: 'History', publish: 2002, edition: 2005
    },
    {
        title: 'Book four', genre: 'Fiction', publish: 1988, edition: 2004
    },
    {
        title: 'Book five', genre: 'Science', publish: 2001, edition: 2006
    },
    {
        title: 'Book six', genre: 'Non-Fiction', publish: 1989, edition: 2009
    },
    {
        title: 'Book seven', genre: 'Fiction', publish: 1975, edition: 2010
    },
]

//const userBooks = books.filter( (bk)=> bk.genre === 'Fiction')
const userBooks = books.filter((bk)=>{
    return bk.publish>2000 && bk.genre === 'History'
})
console.log(userBooks)