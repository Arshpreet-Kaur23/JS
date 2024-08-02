//This keyword - It tells us about the current context
const user = {
    usename:"Arsh",
    pricr:"999",
    welcomeMessage:function(){
        console.log(`${this.usename}, welcome to website`);
    }
}
user.welcomeMessage();

// console.log(this); //Return an empty object
//cant use this in functions

//////////////////=========Arrow Functions================///////////////////
const addTwo = (num1,num2) =>{
    return num1+num2;
}

console.log(addTwo(3,4));

//Two types of return
//Implicit - without return
//Explicit - with return


//////////////////IIFE - Immediately Invoked Function Expressions////////////
(function chai(){
    console.log("DB CONNECTED");
})();