import React from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import EditProduct from "../components/EditProduct";

const ProductItem = ({ product }) => {
  const { products, dispatch } = useProductsContext();

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
          <span
            className="material-symbols-outlined m-1"
            data-bs-toggle="modal"
            data-bs-target="#editProduct"
          >
            edit
          </span>
          {products &&
            products.map((product) => (
              <EditProduct key={product.Dish_id} product={product} />
            ))}

          <span
            className="material-symbols-outlined m-1 text-danger"
            onClick={handleClick}
          >
            delete_forever
          </span>
        </span>
      </div>
      <p className="mb-1">{product.Description}</p>
      <small>${product.Price}</small>
    </div>
  );
};

export default ProductItem;
