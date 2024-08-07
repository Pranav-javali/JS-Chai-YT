const user = {
    username: "Pranav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

//console.log(this)

// function coffee()
// {
//     console.log(this)
// }
// coffee()

// function coffee()
// {
//     let usern = "Hitesh"
//     console.log(this.usern)
// }
// coffee()

// const chai = function()
// {
//     let usern = "Hitesh"
//     console.log(this.usern)
// }
// chai()

const chai = () =>
{
    let usern = "Hitesh"
    console.log(this.usern)
    console.log(this)
}
//chai()



// const addTwo = (num1,num2) =>
// {
//     return num1+num2
// }

//Implicit return

//const addTwo = (num1,num2) => num1+num2

//const addTwo = (num1,num2) => (num1+num2)

//object
// const addTwo = (num1,num2) => {username: "Divyam"}  //undefined

const addTwo = (num1,num2) => ({username: "Divyam"})

console.log(addTwo(3,4))