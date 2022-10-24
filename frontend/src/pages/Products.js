import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import AddProduct from "../components/AddProduct";
import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import Searchbar from "../components/SearchBar";

const { search } = window.location;
const query = new URLSearchParams(search).get("s");

const searchProducts = (products, query) => {
  if (!query) {
    return products;
  }
  return products.filter((products) => {
    const dishname = products.DishName.toLowerCase();
    return dishname.includes(query.toLowerCase());
  });
};

const baseurl = process.env.REACT_APP_BACKEND_API_URL; 

const Products = () => {
  const { products, dispatch } = useProductsContext();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${baseurl}/api/products`);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };
    fetchProducts();
  }, []);

  const [searchQuery, setSearchQuery] = useState(query || "");
  const searchedProducts = searchProducts(products, searchQuery);

  return (
    <div className="container-fluid bg-dark">
      <h2 className="text-warning">Product Management</h2>
      <div className="container-fluid w-50 mt-3 p-2 border border-dark">
        <div className="row">
          <h3 className="text-warning">Product List</h3>
          <div className="col">
            <Searchbar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="col nav justify-content-end">
            <button
              type="button"
              className="material-symbols-outlined bg-dark border border-dark text-warning"
              data-bs-toggle="modal"
              data-bs-target="#addProduct"
            >
              add_circle
            </button>
            <AddProduct />
          </div>
        </div>
        <div className="products">
          {products &&
            searchedProducts.map((product) => (
              <div key={product._id}>
                <ProductItem
                  id={product.Dish_id}
                  name={product.DishName}
                  price={product.Price}
                  category={product.Category}
                  ingredients={product.Ingredients}
                  description={product.Description}
                  imageURL={product.imageURL}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
