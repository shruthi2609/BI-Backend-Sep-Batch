const express=require("express")
const router=express.Router()
const userDetails=require("../models/userDetails")
router.post("/signin",async (req,res)=>{
    const data=req.body
    try{
    const result=await userDetails.findOne({username:data.username})
    if(result){
        if(result.password===data.password){
            res.send("authenticated")
        }
        else{
            res.send("password is not matching") 
        }
    }
    else{
        res.send("this user does not exists")
    }
   
    }
    catch(e){
        res.send("unknown error occured")
    }
   
  
})
module.exports=router
