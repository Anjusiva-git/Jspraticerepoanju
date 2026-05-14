let marks=[10,20,30]
let sum=0
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}
console.log("total mark is " + sum)

//reduce method is used to reduce the elements in array elements into single into a single value

let totalmark=marks.reduce((total,val)=> total+val,0)
console.log("using the reduce method" + totalmark)


//filter array is used for selected element from an array based on condition and return new array with only matching condition
let filterarray=marks.filter(v=> v>10)
console.log(filterarray)


//map() take each value change it and gives new value

let gracemark=marks.map(x=> x+5)
//let gracemark=marks.map(x=> x+5)
console.log(gracemark)
console.log(marks)