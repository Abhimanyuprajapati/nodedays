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
app.get('/api/product/:querry', async(req, res)=>{
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

// update api 
app.put('/api/products/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const updateData = req.body; // Get only the fields user provided

    if (!Object.keys(updateData).length) {
      return res.status(400).json({ message: "No fields to update" });
    }

    // Determine if query is an ObjectId or a name
    const searchQuery = mongoose.Types.ObjectId.isValid(query)
      ? { _id: query }
      : { name: query };

    // Find and update the document dynamically
    const updatedProduct = await Product.findOneAndUpdate(
      searchQuery,
      { $set: updateData },  // Use $set to update specific fields
      { new: true, runValidators: true } // Ensure updated doc is returned and validation runs
    );


    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

// delete api
app.delete('/api/products/:querry', async (req, res)=>{
   try{
    const {querry}= req.params;

    const searchCriteria = mongoose.Types.ObjectId.isValid(querry)
    ? { _id: querry }
    : { name: querry };

    const updatedProduct = await Product.findOneAndDelete(searchCriteria);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({message: "Product deleted successfully"});

   }catch(error){
    res.status(500).json({messaga: error.message});
   }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




// { $set: updateData }, 
// { new: true, runValidators: true }