//singleton
//Object.create

//Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Pranav",
    "fullname": "Pranav Javali",
    [mySym]: "myKey1",
    age: 18,
    location: "Banglore",
    email: "Hitesh@google.com",
    isLoggedIn : false,
    lastLogin: ["Monday","Saturday"]
}

//Accessing
// console.log(JsUser.email)

// console.log(JsUser["email"])

// console.log(JsUser[mySym])


JsUser.email = "Pranav@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Pranav@google.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello JS USer, ${this.name}`)
}
console.log(JsUser.greeting2())