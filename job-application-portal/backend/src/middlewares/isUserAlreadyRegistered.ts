import {NextFunction, Request,Response} from 'express'

export function isUserRegistered(req:Request,res:Response,next:NextFunction){
    const userId=req.params.userId
    if(userId){
        next()
    }
    else{
        res.status(400).send({'message':'User not registered'})
    }
}