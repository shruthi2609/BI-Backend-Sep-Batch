const http=require("http")
const data=require("./data/users")
const url=require("url")
const { parse } = require("path")
const server=http.createServer((req,res)=>{
    console.log(req)
    const parsedURL=url.parse(req.url,true)
   console.log("parsedURL",parsedURL) 
const quname=parsedURL.query.username
const qemail=parsedURL.query.email
if(parsedURL.pathname==="/view"&&req.method==="GET"){
const filteredData=data.filter((item)=>item.username===quname&&item.email===qemail)
res.writeHead(200)
res.end(JSON.stringify(filteredData))
}
if(req.url==="/add"&&req.method==="GET"){
    res.writeHead(200)
    res.end("<h1> add end point is hit -modify</h1>")   
}

    })

server.listen(3001,()=>console.log("server has started in port no : 3001"))