let sum=(a,b)=>{console.log(a+b)}
sum(3,20)

let sub=(c,d)=>{return(c-d)}
console.log(sub(30,20))

// var-can be used anywhere in block-var is fn scope

function testvar()
{
    if(true){
        var z=80
        console.log(z)
    }
console.log(z)
}

testvar()

//shows error that means let is function scope applicable for const alos
function testlet()
{
    if(true){
        let f=30
        console.log(f)
    }
//console.log(f)
}

testlet()