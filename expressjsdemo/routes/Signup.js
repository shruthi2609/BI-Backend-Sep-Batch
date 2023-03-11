const express=require("express")
const router=express.Router()
const userDetails=require("../models/userDetails")
router.post("/signup",(req,res)=>{
    const data=req.body
    console.log(data)
    const user=new userDetails({
        username:data.username,
        password:data.password,
        phone:data.phone,
        admin:data.admin
    })
    user.save().then((success)=>res.send("signup successfull")).then((err)=>res.send({
        "msg":"not successfull",
        "err":err
    }))
   
})
module.exports=router