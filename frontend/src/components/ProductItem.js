import React from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import EditProduct from "../components/EditProduct";

import { useAuth0 } from "@auth0/auth0-react";
const baseurl = process.env.REACT_APP_BACKEND_API_URL;  

const ProductItem = (props) => {
  const { dispatch } = useProductsContext();
  const { user, getAccessTokenSilently } = useAuth0();  

  const handleClick = async () => {
    const accessToken = await getAccessTokenSilently();
    // when delete button is pressed fetch the product with the given id and call the DELETE method
    const response = await fetch(`${baseurl}/api/products/${props.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"            
      },        
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
          {/* call the EditProduct component when the edit button is pressed */}
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
