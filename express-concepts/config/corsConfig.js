const cors = require('cors'); // import cors module

const configureCors = ()=>{
    return cors({
        // origin -> this will tell that which domain is allowed to access the server
        origin: function (origin, callback) {
            const allowed
            if (whitelist.indexOf(origin) !== -1) {
              callback(null, true)
            } else {
              callback(new Error('Not allowed by CORS'))
            }
          }
    })
}