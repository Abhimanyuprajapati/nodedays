const Product = require("../models/product.model.js");

// get for all products
const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get for single product

const getSingleProduct = async (req, res) => {
  try {
    const { querry } = req.params;
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// this is for create product

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
};
