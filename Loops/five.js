const nums = [1,2,3,4,5,6]


//Map - Calls a defined callBack function on each element and returns the result
const newNums = nums.map((num)=>{
    return num+10;
})
console.log(newNums);
//Chaining - Using multiple functions at same time and the result after execution of function will be passed to the next function