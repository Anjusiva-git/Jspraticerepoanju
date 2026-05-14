class students{
    name:string
    age:number

constructor(name:string,age:number)
{
    this.name=name
    this.age= age
    console.log(name)
console.log(age)
}
 showDetail():void{
    console.log("student name is= "+this.name)
    console.log("student age is ="+this.age)

 }
 displayMark(sub:string,mark:number):string
 {
    return sub +"="+mark
 }

}

let s= new students("anju",24)
s.showDetail()
let anjumark=s.displayMark("anju",10)

let s3= new students("anu",32)
s3.showDetail()
let vinamrk=s3.displayMark("eng",10)
console.log(anjumark)
console.log(vinamrk)