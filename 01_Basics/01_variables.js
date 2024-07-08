const accountId = 122233
let accountEmail = "pranav@gmail.com"
var accountPassword = "12345"
accountCity = "Banglore"
let accountState;

//accountId = 2. //Not allowed- const variable data cannot be changed

accountEmail = "pj@pj.com"
accountPassword = "001001"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])