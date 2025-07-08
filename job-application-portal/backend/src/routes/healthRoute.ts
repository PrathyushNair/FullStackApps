import { Router,Request,Response } from "express";

const healthRouter=Router()

healthRouter.get('/',(req:Request,res:Response)=>{
    res.send('App Healthy')
})

export default healthRouter