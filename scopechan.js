let b=2
function outerfunction()
{
    let a=8;
    console.log(a)
    let b=7;
    function innerfunction()
    {
        let a=90
        console.log(a)
        console.log(b)
    }
    innerfunction()
}
outerfunction()

let x=10
function f1(){
    console.log(x)
}
function fun2()
{
    let x=20
    f1()
}
fun2()