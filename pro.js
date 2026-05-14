let number=12
let oddoreven =new Promise((resolve,reject)=>{
    if(number%2==0){
        resolve("even number")
    }
    else{
        reject("odd number")
    }
    })

    oddoreven.then((Resolvemsg)=>{
        console.log("Resolvedmsg")
    })
    .catch((errMsg)=>{
        console.log(errMsg)
    })