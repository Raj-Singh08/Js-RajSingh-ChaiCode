//Ways to declare and use variable

const accountId=123                 //cannot be changed
let accountEmail="Raj@gmail.com"    //It has scope
var accountPassword="Password123"   
//Prefer not use var as it has issue in block scope and functional scope 
accountCity="Jaipur"    //Not a good way to declare
let accountState;       //Undefined value



//console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])