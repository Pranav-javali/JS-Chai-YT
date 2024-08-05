
//const tinderUser = new Object //Singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Pranav",
            lastname: "Javali"
        }
    }
}

//console.log(regularUser.email)
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);

//merging objects

const obj1 = { 1:'a',2:'b' }
const obj2 = { 3:'a',4:'b' }

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2)

//console.log(obj3)

const users = [
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 2,
        email: "P2@gmail.com"
    },
    {
        id: 3,
        email: "P3@gmail.com"
    },
    {
        id: 4,
        email: "P4@gmail.com"
    },
]

users[1].email

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))

console.log("---------------------------")

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Pranav"
}

//course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor : instructor} = course
console.log(instructor)