console.log(a)
var a=10
sayHoist()// function invocation before defing the function -can be decalared any where- Hoisting 

function sayHoist()
{
console.log("hoist print")

}
let b=2
const c =4
console.log(b)
console.log(c)