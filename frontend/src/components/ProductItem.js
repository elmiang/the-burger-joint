import React from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import EditProduct from "../components/EditProduct";

const ProductItem = (props) => {
  const { dispatch } = useProductsContext();

  const handleClick = async () => {
    const response = await fetch("/api/products/" + props.id, {
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
        <h5 className="mb-1">
          {props.id}. {props.name}
        </h5>
        <span>
          <button
            className="material-symbols-outlined m-1 border border-light"
            data-bs-toggle="modal"
            data-bs-target="#editProduct"
          >
            edit
          </button>
          <EditProduct
            id={props.id}
            name={props.name}
            price={props.price}
            category={props.category}
            ingredients={props.ingredients}
            description={props.description}
            imageURL={props.imageURL}
          />

          <button
            className="material-symbols-outlined m-1 text-danger border border-light"
            onClick={handleClick}
          >
            delete_forever
          </button>
        </span>
      </div>
      <p className="mb-1">{props.description}</p>
      <small>${props.price}</small>
    </div>
  );
};

export default ProductItem;
