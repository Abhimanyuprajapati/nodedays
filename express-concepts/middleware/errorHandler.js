// custom error class

class APIError extends Error {
    constructor(message, statusCode) {
        super(message) // call the parent constructor with the message
        this.statusCode = statusCode // set the status code
        this.name= "APIError"  // set the error type to API Error
    }
}

const asyncHandler = (fn) =>(req, res, next)=>{
    Promise.resolve(fn(req, res, next)) // resolve the promise returned by the function
}


// make global error handler
const globalErrorHandler = (err, req, res, next) => {
    console.log(err.stack); // log the error stack trace

    if(err instanceof APIError) {
        return res.status(err.statusCode).json({
            success: false,
            status: 'Error',
            message: err.message
        });
    }

    else if(err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            status: 'Error',
            message: "Validation Error",
        });
    }
    else{
        return res.status(500).json({
            success: false,
            status: 'Error',
            message: "An unexpected error occurred",
        });
    }
}


module.exports = {APIError, asyncHandler, globalErrorHandler}; // export the APIError class and the global error handler function
