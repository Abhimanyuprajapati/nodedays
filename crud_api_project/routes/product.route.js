const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js"); // Import the Product model
const {
  getProducts,
  getSingleProduct,
  createProduct,
} = require("../controllers/product.controller.js");

// Define the route for getting all products
router.get("/", getProducts);

router.get("/:querry", getSingleProduct);

// post route
router.post("/", createProduct);
router.put("/:query");

module.exports = router;
