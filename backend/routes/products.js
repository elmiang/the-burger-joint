var express = require("express");
const {
  getProducts,
  getProduct,
  getProductsByType,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

var router = express.Router();

// Get all products
router.get("/", getProducts);

// Get products by type
router.get("/:category", getProductsByType);

// Get a product
router.get("/:id", getProduct);

// Post new product
router.post("/", createProduct);

// Delete new product
router.delete("/:id", deleteProduct);

// Update a product
router.patch("/:id", updateProduct);

module.exports = router;
