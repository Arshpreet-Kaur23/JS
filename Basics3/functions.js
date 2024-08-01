//Function - A function is a group of statement that perform a specific time
//It increases reusability of the code and increases readability
function printName(){
    console.log("arsh");//function defination
}
printName();//function call
//Whenever we call a function it will execute the statements written in their defination
//So whenever we want to printName we simply call the function instead of writing it again and again

function addNum(num1,num2){//parameters
    return num1 + num2; //this return statement will return the result after executing their task to the calling function
    //console.log("arsh") //Any statement after return statement never executes
}
const result = addNum(3,4);//arguments
console.log(result);

//if we dont know the nnumber of arguments we use Rest operator
function calculateCartPrice(...num1){ //If we print num1 it will print all the parameters in the form of array
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000))
