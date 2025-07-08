import { Router,Request,Response } from "express";
import UserRegisterationService from "../services/UserRegisteration";

const userRoutes=Router()
const userRegisterationService=new UserRegisterationService()
userRoutes.get('/getUserData/:userId',(req,res)=>{
    res.send(`user is ${req.params.userId}`)
})
userRoutes.post('/register',async (req:Request,res:Response)=>{
    const {userName,userEmail,userPassword}=req.body
    if(!userName||!userEmail||!userPassword){
        res.status(400).send({message:'Incomplete information for user'})
    }
    const resp=await userRegisterationService.registerUser(userName,userEmail,userPassword)
    if(resp.success){
        res.status(200).send(resp.message)
    }
    else{
        res.status(400).send(resp.message)
    }
    
})
userRoutes.post('/login',(req,res)=>{
    
})
export default userRoutes