import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// handle ES module __dirname and __filename
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename); 

// middleware that excepts all request 

const logMiddleware = (req, res, next) => {
    const Log = `[${new Date().toISOString()}] ${req.method} ${req.url} \n`;
    const Logfile = path.join(__dirname, "../logs/request.log");


    fs.appendFile(Logfile, Log, (error) => {
        if(error){
            console.error("fail to log request");
        }
    })

    next();

}

export default logMiddleware;