//let i
//for( i=1;i<=10;i++)
//{
    //console.log(i)
//}

//let b=3
//while(b<=5)
//{
    //console.log(b)
    //b++
//}

//let i=9
//do{
    //console.log(i)
    //i++

//}
//while(i<10)

    
    for(let t=1; t<5;t++)
    {
        if(t==3)
        {
            break;
        }
        console.log(t)
    }

  for(let r=1; r<5;r++)
    {
        if(r==3)
        {
            continue;
        }
        console.log(r)
    }

    function test()
    {
        console.log("hello")
    }

    test()

    let name
    function getname(name)
    {
        console.log("hello" + name)
    }
    getname("anju")