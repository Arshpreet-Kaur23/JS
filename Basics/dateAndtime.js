//Date
let d = new Date();
//console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toLocaleString());

//type of date is object

let myDate = new Date(2024,6,30);//month in javascript starts from 0
console.log(myDate.toString());

//Time
let t=Date.now();
console.log(t);

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth()+1);
console.log(d.getFullYear());
