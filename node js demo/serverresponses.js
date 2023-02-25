const http=require("http")
const data=require("./data/users")
const server=http.createServer((req,res)=>{
    console.log(req)
if(req.url==="/view"&&req.method==="GET"){
res.writeHead(200)
res.end(JSON.stringify(data))
}
if(req.url==="/add"&&req.method==="GET"){
    res.writeHead(200)
    res.end("<h1> add end point is hit </h1>")   
}

    })

server.listen(3001,()=>console.log("server has started in port no : 3001"))