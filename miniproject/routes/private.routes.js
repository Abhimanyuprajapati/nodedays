import { Router } from "express";

const route = Router();

route.get("/dashboard",(req, res)=>{
    res.status(200).send("Welcome to your dashboard");  
})


export default route;