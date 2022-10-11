// Testing productsController methods

const Dish = require("../../models/dishModel");
const mockingoose = require("mockingoose");

const {
  getProducts,
  getProduct,
  getProductsByType,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../productController");

const { mockRequest, mockResponse } = require("../../helpers/testHelper");

// Test get products
describe("Get Products", () => {
  test('Should return all product with Category "Sides"', async () => {
    const product = {
      Dish_id: 10,
      category: "Sides",
      dishname: "Onion Rings",
      price: 6,
      description: "Soft",
      imageURL:
        "https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg",
    };

    mockingoose(Dish).toReturn(product, "find");

    const req = mockRequest("GET", { Category: "Sides" });
    const res = mockResponse();

    await getProductsByType(req, res);
    const data = res.json.mock.calls[0][0];

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();

    expect(data.Dish_id).toEqual(product.Dish_id);
    expect(data.dishname).toEqual(product.dishname);
    expect(data.category).toEqual(product.category);
    expect(data.price).toEqual(product.price);
    expect(data.description).toEqual(product.description);
    expect(data.imageURL).toEqual(product.imageURL);
  });
});

// Test add product
/*
describe("Add Product", () => {
  test("Should add a product with given values", async () => {
    const product = {
      Dish_id: 10,
      category: "Sides",
      dishname: "Onion Rings",
      price: 6,
      description: "Soft",
      imageURL:
        "https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg",
    };

    mockingoose(Dish).toReturn(product, "create");

    const req = mockRequest("POST", product, product);
    const res = mockResponse();

    console.log(req.body);

    await createProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
});*/

// Test delete product
describe("Delete Product", () => {
  test("Should delete a product of specified id", async () => {
    const product = {
      Dish_id: 10,
      category: "Sides",
      dishname: "Onion Rings",
      price: 6,
      description: "Soft",
      imageURL:
        "https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg",
    };

    mockingoose(Dish).toReturn(product, "findOneAndDelete");

    const req = mockRequest("DELETE", { id: 10 });
    const res = mockResponse();

    await deleteProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
});

// Test update product
describe("Update Product", () => {
  test("Should update a product with specified id", async () => {
    const product = {
      Dish_id: 10,
      category: "Sides",
      dishname: "Onion Rings",
      price: 6,
      description: "Soft",
      imageURL:
        "https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg",
    };

    const updatedProduct = {
      price: 20,
    };

    mockingoose(Dish).toReturn(product, "findOneAndUpdate");

    const req = mockRequest("PATCH", { id: 10 }, updatedProduct);
    const res = mockResponse();

    await updateProduct(req, res);
    const data = res.json.mock.calls[0][0];

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();

    expect(data.Dish_id).toEqual(product.Dish_id);
    expect(data.dishname).toEqual(product.dishname);
    expect(data.category).toEqual(product.category);
    expect(data.price).toEqual(product.price);
    expect(data.description).toEqual(product.description);
    expect(data.imageURL).toEqual(product.imageURL);
  });
});
