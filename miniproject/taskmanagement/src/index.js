import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

// local imports
import authRoute from "./routes/auth.routes.js";
import taskRoute from "./routes/task.routes.js";


const app = express(); 


// Global middleware
app.use(express.json());
app.use(session({
    secret:"DSGKHGJSGSRFDJSDFJSJF",
    resave: false,
    saveUninitialized:false,
    cookie:{
        httpOnly: true,
        secure: false,
        maxAge: 1000*60*60*24 // one day
    }
}))
app.use(cookieParser());


// Route related api
app.get("/", (req, res)=>{
    res.send("welcome to task management api yoy");
})

app.use("/auth", authRoute)

app.use("/task", taskRoute)

app.listen(8000, () =>{
    console.log("server is running on port http://localhost:8000");
})

