
//var c = 300
let a = 100

if(true)
{
    let a =10
    const b = 20
    var c = 30
    //console.log("Inner ",a);

}

//console.log(a);
//console.log(b);
//console.log(c);

//22

function one(){
    const username = "Pranav"
    function two()
    {
        const website = " youtube"
        //console.log(username)
    }
    //console.log(website)
    //two()
}
//one()


if(true)
{
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        //console.log(username+website)
    }
    //console.log(website);
}
//console.log(username)


//+++++++++Interesting++++++++++++++++

//normal function

console.log(addOne(5))
function addOne(num1){
    return num1 +1
}
//console.log(addOne(5))

//console.log(addTwo(5))  //error
const addTwo = function(num)
{
    return num +2
}
//console.log(addTwo(5))