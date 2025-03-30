require('dotenv').config(); // load environment variables from .env file
const express = require('express'); // import express module
const cors = require('cors'); // import cors module

const app = express(); // create an instance of express
const PORT = process.env.PORT || 1369; // set the port to listen on


// express json middleware
app.use(express.json()); // parse json data in request body
app.use(cors()); // enable cors for all routes



app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})

