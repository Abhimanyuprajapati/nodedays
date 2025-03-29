const mongoose = require("mongoose");
const Product = require("../models/product.model.js");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID or name (query params)
const getSingleProduct = async (req, res) => {
  try {
    const { query } = req.params;
    console.log("Searching for:", query);

    // Determine where id or name
    const searchCriteria = mongoose.Types.ObjectId.isValid(query)
      ? { _id: query }
      : { name: query };

    console.log("searchCriteria =>", searchCriteria);

    const product = await Product.findOne(searchCriteria);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log("error =>", error);
    res.status(500).json({ message: error.message });
  }
};

// Create a product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { query } = req.params;
    const updateData = req.body;

    if (!Object.keys(updateData).length) {
      return res.status(400).json({ message: "No fields to update" });
    }

    const searchQuery = mongoose.Types.ObjectId.isValid(query)
      ? { _id: query }
      : { name: query };

    const updatedProduct = await Product.findOneAndUpdate(
      searchQuery,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { query } = req.params;

    const searchCriteria = mongoose.Types.ObjectId.isValid(query)
      ? { _id: query }
      : { name: query };

    const deletedProduct = await Product.findOneAndDelete(searchCriteria);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
