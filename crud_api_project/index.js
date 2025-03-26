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

app.get('/api/products', async(req, res)=>{
  try{
    const product= await Product.find({});
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message:error.message});
  }
})

// this is for get single api data
// app.get('/api/products/:name', async(req, res)=>{
//   try{
//     const {name}= req.params;
//     console.log(req.params);
//     const product = await Product.findOne({ name });
    
//     if (!product) {
//       return res.status(404).json({ message: "name not found" });
//     }
//     res.status(200).json(product);
//   }catch(error){
//     res.status(500).json({message:error.message});
//   }
// })

// best approach
app.get('/api/products/:querry', async(req, res)=>{
  try{
    const {querry} = req.params;
    console.log("Searching for:", querry);

    // Determine where id or name 
     const searchCriteria = mongoose.Types.ObjectId.isValid(querry)
     ? { _id: querry }
     : { name: querry };

     const product = await Product.findOne(searchCriteria);

     if (!product) {
       return res.status(404).json({ message: "Product not found" });
     }
 
     res.status(200).json(product);

  }catch(error){
    console.log("error =>", error);
    res.status(500).json({message: error.message});
  }
})

app.post('/api/products',async (req, res) => {
  try{
    const product= await Product.create(req.body);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message: error.message})
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


