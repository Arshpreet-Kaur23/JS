//array - Array in javascript is non primitive data type
//It is a collection of multiple data under single variable
//resizable
//contains a mix of various dataytypes
const arr = [23,556,864,"arsh"];
console.log(arr);
console.log(typeof arr);//object
//accessing array element
console.log(arr[3]);
//shallow copy - properties share same refernces
//deep copy - properties dont share same refernces
const a = new Array(1,23,434,667,68);
console.log(a.length);

//Array methods
//push - insert new element in last of array
//pop - remove last element from array
//unshift - insert new element in start of array - It is usually not prefered as it shift each element to right side and this will become costly
//shift - remove first element from the array
//includes - It is used to find whether a particular element exists in the array or not
//indexOf - It is used to find the index of a particular element
const newArr = arr.join();//Join all elements of array and return them in the form of a string
console.log(typeof newArr);

//slice - Extract a section of array and it does not modify the original array
//splice - Remove elements from the array and it modifies the original array

//When we push one array in other array then the array will take it as a single element means now the array contains all the previous element and also one more element that is the pushed array
//But when we concat array with other than it will return a new array containing elements of both the arrays
//Spread Operator

//flat converts a nested array into a single array
console.log(Array.from("Arsh"));//convert string into the array


