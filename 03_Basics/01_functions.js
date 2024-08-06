
function sayMyName()
{
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

//sayMyName()

function add(n1, n2){
    console.log(n1+n2);
}

//add(3,4)
//add(3,"4")
//add(3,"a")
//add(3,null)

function add2(num1, num2)
{
    console.log(num1+num2);
}
// const result = add2(3,5)
// console.log(result); //undefined

function addnew(number1, number2)
{
    // let res = number1+number2
    // return res

    //OR

    return number1+number2
}
// const res = addnew(3,5)
// console.log(res)

function loginUser(username){
    return `${username} just logged in`
}

//console.log(loginUser("Pranav"));
//console.log(loginUser());

// function loginUserMessgae(username){
//     if(username === undefined) //if(!username)
//     {
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessgae())

//default value sam
function loginUserMessgae(username = "sam"){
    if(!username)
    {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessgae())

//20

//function calculateCartPrice(...num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(200,100,300,2000));

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}
//console.log(calculateCartPrice(200,100,300,2000));

const user={
    username: "Pranav",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username: "sam",
    price: 299
})