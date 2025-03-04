import express from "express";
import publicRoute from "./routes/public.routes.js";
import privateRoute from "./routes/private.routes.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app= express();

const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename); 

if (!fs.existsSync(path.join(__dirname, "logs"))) {
    fs.mkdirSync(path.join(__dirname, "logs"));
}

// inbuild middleware
app.use(express.json());    

// middleware route public
app.use("/public", publicRoute)

// middleware route private
app.use("/private", privateRoute)

app.listen(8000, ()=>{
    console.log("server is running on http://localhost:8000");
})