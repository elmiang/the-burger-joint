const Dish = require("../models/dishModel");
const mongoose = require("mongoose");

// get all products
const getProducts = async (req, res) => {
  // sort all products in decending order by id
  const products = await Dish.find({}).sort({ Dish_id: -1 });

  // send error response if there are no products to display
  if (!products) {
    return res.status(400).json({ error: "Could not find products!" });
  }

  res.status(200).json(products);
};

// get a single product
const getProduct = async (req, res) => {
  const { id } = req.params;
  // find a product by its id
  const product = await Dish.find({ Dish_id: id });
  // send error if there are no products with matching id
  if (!product) {
    return res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

// get products by type (obsolete)
const getProductsByType = async (req, res) => {
  const { category } = req.params;

  const products = await Dish.find({ Category: category });

  if (!products) {
    return res.status(400).json({ error: "No such products" });
  }
  res.status(200).json(products);
};

// create a new product
const createProduct = async (req, res) => {
  // store the given attributes in the requests body
  const {
    Dish_id,
    Category,
    DishName,
    Price,
    Description,
    ingredients,
    imageURL,
  } = req.body;

  let emptyFields = [];
  // check for any empty fields
  if (!Dish_id) {
    emptyFields.push("Dish_id");
  }
  if (!DishName) {
    emptyFields.push("DishName");
  }
  if (!Category) {
    emptyFields.push("Category");
  }
  if (!Description) {
    emptyFields.push("Description");
  }
  if (!Price) {
    emptyFields.push("Price");
  }
  if (!imageURL) {
    emptyFields.push("ImageURL");
  }
  if (emptyFields.length > 0) {
    // display error and highlight the missing fields
    return res
      .status(400)
      .json({ error: "Please fill in the highlighted fields!", emptyFields });
  }

  // add document to MongoDB
  try {
    const product = await Dish.create({
      Dish_id,
      Category,
      DishName,
      Price,
      Description,
      ingredients,
      imageURL,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  // find a product by the given id and remove it
  const product = await Dish.findOneAndDelete({ Dish_id: id });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  // find a product by id and update the attributes supplied in the request body
  const product = await Dish.findOneAndUpdate(
    { Dish_id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

// export these methods for use by the router
module.exports = {
  getProducts,
  getProduct,
  getProductsByType,
  createProduct,
  deleteProduct,
  updateProduct,
};
