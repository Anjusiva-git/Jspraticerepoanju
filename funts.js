"use strict";
function sayHello() {
    console.log("hello all");
    console.log("fun with no parameter and no return type");
}
sayHello();
//functiom with parameters and no return value
function greet(name, age) {
    console.log("hello my nmae is " + name + "and my age is " + age);
}
greet("anju", 12);
//function with parameter and return type
function addition(a, b) {
    return a + b;
}
let sum = addition(10, 20);
console.log("the sum is" + sum);
