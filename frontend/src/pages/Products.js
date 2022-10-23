import React from "react";
import ProductItem from "../components/ProductItem";
import AddProduct from "../components/AddProduct";
import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";

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

  return (
    <div className="container-fluid bg-dark">
      <h2 className="text-warning">Product Management</h2>
      <div className="container-fluid w-50 mt-3 p-2 border border-dark">
        <h4 className="text-warning">
          <div className="row">
            <div className="col">Product List</div>
            <div className="col nav justify-content-end">
              <button
                type="button"
                className="btn btn-warning m-1"
                data-bs-toggle="modal"
                data-bs-target="#addProduct"
              >
                Add
              </button>
              <AddProduct />
            </div>
          </div>
        </h4>
        <div className="products">
          {products &&
            products.map((product) => (
              <ProductItem key={product.Dish_id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
