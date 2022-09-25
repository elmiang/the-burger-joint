import React from "react";
import ProductItem from "../components/ProductItem";
import AddProduct from "../components/AddProduct";

const Products = () => {
  /*handleAdd = () => {
    console.log("add clicked");
  };*/

  return (
    <div className="container-fluid bg-dark">
      <h2 className="text-warning">Product Management</h2>
      <div className="container-fluid bg-secondary w-50 mt-3 p-2 border border-dark">
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
              <button type="button" className="btn btn-warning m-1">
                Edit
              </button>
              <button type="button" className="btn btn-danger m-1">
                Delete
              </button>
            </div>
          </div>
        </h4>
        <ul className="list-group list-group-flush bg-secondary">
          <ProductItem name="Beef Burger" id="1" />
          <ProductItem name="Cheese Burger" id="2" />
          <ProductItem name="Chicken Burger" id="3" />
          <ProductItem name="Veggie Burger" id="4" />
          <ProductItem name="Mixed Burger" id="5" />
          <ProductItem name="Edible Burger" id="6" />
        </ul>
      </div>
    </div>
  );
};

export default Products;
