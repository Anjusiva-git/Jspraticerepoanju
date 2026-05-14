//object-basically for data storage 

let pen={

    color :"red",
    price :12,
    brand :"BAC"
}

console.log(pen.color)
console.log(pen["color"])
console.log(pen)

pen.location="tvm"//addd
console.log(pen)
pen.color="blue"//update

console.log(pen)
 delete pen.location;
 console.log(pen)



 //multiple objects

 let stud={
    names:"anju",
    rollno:12,
   // marks:{

       // java:90,
      //  c:60

   // },
    sub:["java","jsx","playwrright"],
    ispass:true

 }
 console.log(stud)
 //console.log(stud.marks.java)
  console.log(stud)
   console.log(stud.sub[2])
    console.log(stud.ispass)

    console.log("looping java script object using for ...in")
for(let key in stud)
{
     console.log(key + ":" +stud[key])
}
