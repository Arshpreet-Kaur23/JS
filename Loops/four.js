const coding = ["js","c++","c","python","golang"]

const myNums = [1,2,3,4,5,6,7,8,9,10]

//Filter - It returns elements of array that meet the specific condition given in callback fuction

const newNums= myNums.filter((num)=> (num%2)) //This will return all the odd elements of array
console.log(newNums);

