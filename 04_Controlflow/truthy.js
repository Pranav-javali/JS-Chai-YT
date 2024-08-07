// const userEmail = "P@pranav.ai"
// const userEmail = ""
// const userEmail = " "
const userEmail = []

// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("No Email")
// }

//Flasy values
//false, 0, -0, "", Bigint 0n, null, undefined, NaN

//Truthy values
//"0", "false", " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is Empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Objet is empty")
}

//Nullish Coalescing Operater (??) (mainly for null and undefined)

let val1;

// val1 = 5 ?? 10

//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20 //(do not do like this)

//console.log(val1)


//Terniary Operater

//condition ? true : false

const coffeePrice = 200
coffeePrice <=100 ? console.log("less than 100") : console.log("greater than 100") ;