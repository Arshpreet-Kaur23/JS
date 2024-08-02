//if
if(true){
    console.log("arshpreet kaur")
}
//if the condition written is true than the statements under if will be executed else not

//else
else{
    console.log("The condition given is not true")
}
//else block is executed only if the if block is not executed or the condition given in if is not true

//if-else if-else - These are used when we want to check multiple conditions
let balance=1200
if(balance<1000){
    console.log("Less than 1000")
}
else if(balance<1500){
    console.log("Less than 1500")
}
else{
    console.log("You haave enough balance")
}

//////////////////////////+++++++++++++Switch+++++++++++++++++++//////////////////////
month=3
switch(month){
case 1:
    console.log("January");
    break;
case 2:
    console.log("February");
    break;
case 3:
    console.log("March");
    break;
default:
    console.log("Other");
    break;
}
//break statement is compulsory in switch if we don't use break then all cases after match caase will also get executed

//Conditional operator
//condition ? if true execute these statements : if false execute these statements

//falsy values - 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values - "0", "false", " ", [], {}, function(){}