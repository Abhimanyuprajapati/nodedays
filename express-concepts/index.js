require('dotenv').config(); // load environment variables from .env file
const express = require('express'); // import express module
const cors = require('cors'); // import cors module
const corsConfig = require('./config/corsConfig'); // import cors configuration
const { globalErrorHandler } = require('./middleware/errorHandler'); // import global error handler
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware'); // import custom middleware functions
const {urlVersioning} = require('./middleware/apiVersioning'); // import versioning middleware
const {createBasicRateLimiter} = require('./middleware/rateLimiting'); // import rate limiting middleware

const app = express(); // create an instance of express
const PORT = process.env.PORT || 1369; // set the port to listen on


// express json middleware
app.use(requestLogger);
app.use(addTimeStamp);
app.use(express.json()); // parse json data in request body
app.use(cors()); // enable cors for all routes
app.use(corsConfig()); // enable cors with custom configuration

app.use(createBasicRateLimiter(100, 15 * 60 * 1000)); // 100 requests per minute

app.use(urlVersioning('v1')); // use versioning middleware for v1

app.use(globalErrorHandler); // use global error handler



app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})

