const http=require("http")
/*const server=http.createServer((req,res)=>{
console.log(req)
res.writeHead(301)
res.end("hello from server")
})*/
const server=http.createServer((req,res)=>{
    console.log(req)
if(req.url==="/view"&&req.method==="GET"){
res.writeHead(200)
res.end("/view is hit")
}
if(req.url==="/add"&&req.method==="GET"){
    res.writeHead(200)
    res.end("/add is hit")   
}
    })

server.listen(3001,()=>console.log("server has started in port no : 3001"))