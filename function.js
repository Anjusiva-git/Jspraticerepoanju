function countof()
{
    let count =10
    function addog(){
        console.log(count)
        count ++
    }
    return addog
}

let cout1 =countof()

for(i=0;i<10;i++){
cout1()
}

