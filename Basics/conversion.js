let score = "33"
console.log(typeof score)
let valueInNumber = Number(score) //this will convert string to a number
console.log(typeof valueInNumber)

let score1 = "33abc"
console.log(typeof score1)
let valueInNumber1 = Number(score1) //this will convert string to a number
console.log(typeof valueInNumber1)
console.log(valueInNumber1) //this will print NaN which means not a number

//NULL
let score2 = null
console.log(typeof score2)
let valueInNumber2 = Number(score2) //this will convert string to a number
console.log(typeof valueInNumber2)
console.log(valueInNumber2) //this will print 0

//Undefined
let score3 = undefined
console.log(typeof score3)
let valueInNumber3 = Number(score3) //this will convert string to a number
console.log(typeof valueInNumber3)
console.log(valueInNumber3) //this will print Nan

let score4 = true
console.log(typeof score4)
let valueInNumber4 = Number(score4) //this will convert string to a number
console.log(typeof valueInNumber4)
console.log(valueInNumber4) //this will print 1 for true and 0 for false

//for string it will print Nan

//to bool use Boolean
//1 =>true; 0=>false;
//""=>false
//"arsh"=>true

//to string use String

///////////////Operations///////////////////////
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)

let str1="hello";
let str2="arsh";
let str3= str1 + str2;
console.log(str3) //this is concatenate two strings

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

let num1,num2,num3
num1 = num2 = num3 = 2+2



