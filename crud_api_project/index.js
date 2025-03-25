const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.use(express.json());  // this is the by default middleware 


mongoose.connect("mongodb+srv://proengineer18:proengineer@backendapi.uqyea.mongodb.net/?retryWrites=true&w=majority&appName=BackendAPI")
  .then(() => console.log('Connected to database!'));

app.get('/', (req, res) => {
  res.send('Hello World! to my l...')
})

app.post('/api/products', (req, res)=>{
  console.log(req.body);
  res.send(req.body);
  // res.send("data received");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// password :   CL2vxBQ1x2b77gJL

// 