import { Workers } from  "./Workers.js"
class Teach extends Workers{
Teach(){

    console.log("Teach")
}
Overtime()
{
    console.log("this is overtime")
}
}

let t1= new Teach()
 t1.Teach()
 t1.Overtime()

 let w1= new Workers()
 w1.Overtime()

 // POLYMORHSIM -METHOD overidding