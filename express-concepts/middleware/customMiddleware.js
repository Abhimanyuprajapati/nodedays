
const requestLogger = (req, res, next)=>{
    const timeStamp = new Date().toISOString(); // get the current timestamp in ISO format
    const method = req.method; // get the HTTP method of the request (GET, POST, etc.)
    const url = req.url; // get the URL of the request
    const userAgent = req.get("User-Agent"); // get the User-Agent header from the request
    const ip = req.ip; // get the IP address of the request
    console.log(`[${timeStamp}] ${method} ${url} ${userAgent} ${ip}`); // log the request details
    next(); // call the next middleware in the stack
}

const addTimeStamp = (req, res, next) =>{
    req.timeStamp = new Date().toISOString(); // add a timestamp to the request object
    next();
}

module.exports = {requestLogger, addTimeStamp}; // export the middleware functions