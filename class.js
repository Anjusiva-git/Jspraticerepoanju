"use strict";
class students {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(name);
        console.log(age);
    }
    showDetail() {
        console.log("student name is= " + this.name);
        console.log("student age is =" + this.age);
    }
    displayMark(sub, mark) {
        return sub + "=" + mark;
    }
}
let s = new students("anju", 24);
s.showDetail();
let anjumark = s.displayMark("anju", 10);
let s3 = new students("anu", 32);
s3.showDetail();
let vinamrk = s3.displayMark("eng", 10);
console.log(anjumark);
console.log(vinamrk);
