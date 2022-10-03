const Dish = require("../models/dishModel");
const mongoose = require("mongoose");

// get all products
const getProducts = async (req, res) => {
  const products = await Dish.find({}).sort({ Dish_id: -1 });
  res.status(200).json(products);
};

// get a single product
const getProduct = async (req, res) => {
  const { Dish_id: id } = req.params;

  const product = await Dish.find(id);

  if (!product) {
    return res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

// get products by type
const getProductsByType = async (req, res) => {
  const { category } = req.params;

  const products = await Dish.find({ category }).sort({ Dish_id: -1 });

  res.status(200).json(products);
};

// create a new product
const createProduct = async (req, res) => {
  const {
    Dish_id,
    category,
    dishname,
    price,
    description,
    ingredients,
    imageURL,
  } = req.body;

  let emptyFields = [];

  if (!Dish_id) {
    emptyFields.push("Dish_id");
  }
  if (!dishname) {
    emptyFields.push("DishName");
  }
  if (!category) {
    emptyFields.push("Category");
  }
  if (!description) {
    emptyFields.push("Description");
  }
  if (!price) {
    emptyFields.push("Price");
  }
  if (!imageURL) {
    emptyFields.push("ImageURL");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields!", emptyFields });
  }

  // add document to MongoDB
  try {
    const product = await Dish.create({
      Dish_id,
      category,
      dishname,
      price,
      description,
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

  const product = await Dish.findOneAndDelete({ Dish_id: id });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  let emptyFields = [];

  if (!dishname) {
    emptyFields.push("DishName");
  }
  if (!category) {
    emptyFields.push("Category");
  }
  if (!description) {
    emptyFields.push("Description");
  }
  if (!price) {
    emptyFields.push("Price");
  }
  if (!imageURL) {
    emptyFields.push("ImageURL");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields!", emptyFields });
  }

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

module.exports = {
  getProducts,
  getProduct,
  getProductsByType,
  createProduct,
  deleteProduct,
  updateProduct,
};
