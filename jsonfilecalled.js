import data from './sampledata.json' with {type:"json"}
console.log(data.name)

let employee1={
    fname:"anju",
    lname:"a n",

    fullName :function() 
    {
    let nameemp = this.fname + this.lname
    return nameemp
    }
}

console.log(employee1.fullName())
HK