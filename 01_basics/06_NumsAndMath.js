const score=500
// console.log(score)      //500
const value=new Number(100)
// console.log(value);     //[Number: 100]

// console.log(value.toFixed(2))   //Shows till two decimal point

const number=34.4923
// console.log(num.toPrecision(3));


const hundreds=10000000000;
// console.log(hundreds.toLocaleString('en-IN'));


// ============= Maths =============
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));
// console.log(Math.min(8, 5, 4, 9, 33, 1));
// console.log(Math.max(8, 5, 4, 9, 33, 1));
// console.log(Math.random());

// console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
let num = Math.round((Math.random() * (max - min + 1))+min);
console.log(num);
