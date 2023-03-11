const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const todoRoutes=require("./routes/todoRoutes")
const cmRoutes=require("./routes/cmanager")
const signup=require("./routes/Signup")
const signin=require("./routes/Signin")
const protected=require("./routes/protected")
server.use("/todo",todoRoutes)
server.use("/",cmRoutes)
server.use("/",signup)
server.use("/",signin)
server.use("/",protected)
server.listen(3001,()=>console.log("server has started at port no : 3001"))