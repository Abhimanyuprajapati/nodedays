
const rateLimit = require('express-rate-limit') // import rate limiting middleware

const createBasicRateLimiter = (maxRequests, time)=>{
	return rateLimit({
		max: maxRequests,
		windowMs: time, 
		message: "to many requests, please try again later",
		limit: 100, 
		standardHeaders: 'draft-8',
		legacyHeaders: false,
	})
}


module.exports = {createBasicRateLimiter};