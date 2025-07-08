import express from "express";
import healthRouter from "./routes/healthRoute";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes";
import applicationRoutes from "./routes/applicationRoutes";

const app=express()  
app.use(express.json());
app.use('/health',healthRouter)
app.use('/user',userRoutes)
app.use('/application',applicationRoutes)

export default app