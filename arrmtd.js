let arr=[1,2,5]
console.log(arr);


arr.push(10)// add element at tthe end of the array
console.log(arr)

arr.pop()// delete the last element in the array
console.log(arr)

arr.unshift(20)// add the element at the first poistion 
console.log(arr)

arr.shift()//delete the elemnt at the first  
console.log(arr)

console.log(arr.length)//return the length of array

console.log(arr.indexOf(2))//return the index of the element 2 as value as 1 or if the index is not there gives o/p -1

let bool=arr.includes(3)
console.log(bool)//returns true if the element in the array or else false

let newarr=[1,2,3,4,5]
console.log(newarr);
 
let newarr1= newarr.slice(1,3)//create the new array that has elemnet from index 1 to index 3 of array newarr
console.log(newarr1)

newarr.splice(0,2)//start index and number off elements to be removed
console.log("after removing the element at index "+newarr)

newarr.splice(0,1,6)//start index,number of element to be removed and element to be added
console.log("after adding new element"+newarr)