//Reduce - It returns the accumulated result
const nums = [1,2,3]

const myTotal = nums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currVal:${currval}`)
    return acc+currval
},0)

console.log(myTotal);