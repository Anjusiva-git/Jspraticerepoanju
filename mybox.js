//clouser in js -a function can use varaiables outside of it

function myBox()
{
    let myprdt ="phone"
    //let count =100
    function getPrdt()
    {
        console.log(myprdt)
        //count++
       // console.log(count++)
    }
return getPrdt

}
let box = myBox()
box()
box()