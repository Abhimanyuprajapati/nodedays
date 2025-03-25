require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Default middleware

// Connect to MongoDB using the env variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to database!'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World! to my l...');
});

app.post('/api/products',async (req, res) => {

  try{
    const product= await Product.create(req.body);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message: error.message})
  }
  // console.log(req.body);
  // res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// const express = require('express')
// const mongoose = require('mongoose')
// const app = express()
// const port = 3000

// app.use(express.json());  // this is the by default middleware 


// mongoose.connect("mongodb+srv://proengineer18:proengineer@backendapi.uqyea.mongodb.net/?retryWrites=true&w=majority&appName=BackendAPI")
//   .then(() => console.log('Connected to database!'));

// app.get('/', (req, res) => {
//   res.send('Hello World! to my l...')
// })

// app.post('/api/products', (req, res)=>{
//   console.log(req.body);
//   res.send(req.body);
//   // res.send("data received");
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

