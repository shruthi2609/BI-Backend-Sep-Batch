const express=require("express")
const server=express()
const todoRoutes=require("./routes/todoRoutes")
const cmRoutes=require("./routes/cmanager")

server.use("/todo",todoRoutes)
server.use("/",cmRoutes)
server.listen(3001,()=>console.log("server has started at port no : 3001"))