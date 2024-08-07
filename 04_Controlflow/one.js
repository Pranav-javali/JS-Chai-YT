//if

// if(true){

// }

// if(2=="2"){
//     console.log("Equal")
// }

// const temperature = 41
// if(temperature<50){
//     console.log("less than 50")
// }
// else{
//     console.log("greater than 50")
// }

//const balance = 1000

//Implicit Scope
//if(balance>500) console.log("Implicit scope");

//multiple print do not use this 
//if(balance>500) console.log("Implicit scope"), console.log("Another Implicit scope")

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User logged In")
}