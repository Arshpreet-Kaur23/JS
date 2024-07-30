const score =100;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);//this method will convert number to string

const num = 23.8666;

console.log(typeof num.toPrecision(3));//return string

//+++++++++++++++++++++MATHS++++++++++++++++++++++
//Math is a library of javascript
console.log(Math.abs(-4));
console.log(Math.round(4.6));
//ceil - choose top value
//floor - choose lowest value
//min and max - use to find minimum and maximum value from given values
//random - generate a random value between 0 and 1
console.log(Math.random());

//If we want a random value in the range
const min=10;
const max=20;
console.log((Math.random()*(max-min+1))+min);
