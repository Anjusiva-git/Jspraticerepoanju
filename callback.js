function greet( name ,callback)
{
    console.log("hello "+name)
    callback()
}
    function welcome()
    {
        console.log("this is my name")
    }


greet("anju",welcome)