const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);   // working
router.get("/:query", getSingleProduct); // working
router.post("/", createProduct);  // working
router.put("/:query", updateProduct); //working
router.delete("/:query", deleteProduct); // working

module.exports = router;
