const JsUser = {
    name:"Arsh",
    location:"Jaipur",
    email:"arsh@mail.com",
}
//Accessing objects elements
console.log(JsUser.name);
console.log(JsUser["email"]);
//Object.freeze(JsUser)//This will freeze the object means no new changes will propagate
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));

//Object Destructuring
const course = {
    courseName:"Js in Hindi",
    price:"100000",
    couseInstructor:"Arsh"
}

const {couseInstructor:instructor} = course
// console.log(couseInstructor);
console.log(instructor);

//JSON - JavaScript Object Notation