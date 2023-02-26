const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
const parsedURL=url.parse(req.url,true)
console.log(parsedURL)
console.log(req)
if(parsedURL.pathname==="/addContact"&&req.method==="POST"){
    let reqData=""
    console.log("post req")
    req.on("data",(chunk)=>{
       reqData+=chunk.toString()
    })
    req.on("end",()=>{
        console.log("data ended")
        console.log("data",reqData)
    })
    req.on("close",()=>{
        console.log("closed the connection")
    })
    req.on("error",(err)=>{
        console.log(err)
    })
    res.end("dummy")
}
})
server.listen(3001,()=>console.log("server started in port no :3001"))