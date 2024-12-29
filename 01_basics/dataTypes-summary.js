//DataTypes are devided into two category based on how they are stored and accessed

//Primitive DataType    (call by value)
//7 Type : String,Number,Boolean,null,undefined,Symbol,BigInt
const score=23.4    //Number

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)     //false     Symbol used to create unique value(lamen way defined)


//Non-Primitive or Reference Type (typeof all non-premitive is object and for funtion is funcitonObject)
//Array, Objects, functions

const heros=["shaktiman","naagraj","doga"];
//console.log(typeof heros)   //object
let myobj={
    name:"Raj",
    age :22
}

let myFunction=function() {
    console.log("Hello World")
}


//--------------------------------Memory----------------------

//Stack Memory is used in (Primitive)type dataTypr, Heap Memory is used for(Non-Premitive)

let myYoutubeName="Raj Singh"
let anothername=myYoutubeName
anothername="Youtube"

console.log(anothername)
console.log(myYoutubeName);

let userOne={
    email:"Raj@gmail.com"
}
let UserTwo=userOne
UserTwo.email="Hello@gmail.com"

console.log(userOne);
console.log(UserTwo);






