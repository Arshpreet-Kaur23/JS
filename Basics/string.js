const name = "Arsh";
const pass = 12345478;
//console.log(name+pass+"password");

console.log(`Hello my name is ${name} and my password is ${pass}`);

const game = new String("sfydfy");
console.log(game[0])//return first character of a game

//length of string
console.log(game.length);
console.log(game.toUpperCase()); //This will not change our original string
console.log(game.charAt(2));//this method will character at a particular index
console.log(game.indexOf('t'))//this method will find the index of a particular character

const newString = game.substring(0,4);//this method will return a new string of 4 characters from game starting from 0 index and 
console.log(newString);

const str = game.slice(-8,4);//we can give negative value in this, negative value means it will start from reverse

//trim - this method will remove the unnecassay spaces from the string
const newstr = "   arsh   ";
console.log(newstr);
console.log(newstr.trim());//trimstart() and trimend()

//split and join