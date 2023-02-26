const fs=require("fs")
console.log("start")
//read file
fs.readFile("./jobseekers.txt","utf-8",(err,data)=>{
if(err){
    console.log(err)
}
else{
    console.log(data)
}
})

//write file
fs.writeFile("./jobseekers.txt","this is from async write",(err)=>{
if(err){
    console.log(err)
}
})

//append file
fs.appendFile("./jobseekers.txt","this is from async append",(err)=>{
    if(err){
        console.log(err)
    }
    })
console.log("end")