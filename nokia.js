import { mobile } from "./mobile.js"

class nokia extends mobile
{
    testxmsg()
    {
        console.log("nokia phone")
    }
}

let n= new nokia()
n.testxmsg()
n.phonecall()