import {Router,Request,Response} from 'express'

const applicationRoutes=Router()

applicationRoutes.get('/:applicationId',(req:Request,res:Response)=>{
    const applicationId=req.params.applicationId
    res.send(`Job application Id ${applicationId}`)
})
export default applicationRoutes