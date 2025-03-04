import { Router } from "express";

const route = Router();

route.get("/generate-token",(req, res)=>{
    const token = "token";
    res.status(200).send({
        message: "token generated",
        token:token,
    })
})

route.get("/", (req, res)=>{
    res.status(200).send("welcome to our home");
})


export default route;