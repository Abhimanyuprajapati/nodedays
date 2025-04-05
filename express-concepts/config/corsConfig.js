const cors = require("cors"); // import cors module

const configureCors = () => {
  return cors({
    // origin -> this will tell that which domain is allowed to access the server
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", //local dev
        "https://example.com", // production doman
      ];

      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // giving permission to the origin
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allowed methods
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"], // allowed headers
    exposedHeaders: ["Content-Range", "X-Content-Range"], // headers that can be exposed to the browse
    credentials: true, // allow credentials (cookies, authorization headers, etc.)
    preflightContinue: false, // pass the CORS preflight response to the next handler
    maxAge: 600, // cache the preflight response for 10 minutes
    optionsSuccessStatus: 204,
  });
};

module.exports = configureCors; // export the cors configuration function