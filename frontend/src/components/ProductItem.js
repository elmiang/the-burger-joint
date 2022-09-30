import React from "react";
import { useProductsContext } from "../hooks/useProductsContext";

const ProductItem = ({ product }) => {
  const { dispatch } = useProductsContext();

  const handleClick = async () => {
    const response = await fetch("/api/products/" + product.Dish_id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PRODUCT", payload: json });
    }
  };

  return (
    <div className="product-items align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{product.DishName}</h5>
        <span>
          <button className="btn btn-warning m-1">Edit</button>
          <button className="btn btn-danger" onClick={handleClick}>
            Delete
          </button>
        </span>
      </div>
      <p className="mb-1">{product.Description}</p>
      <small>${product.Price}</small>
    </div>
  );
};

export default ProductItem;
