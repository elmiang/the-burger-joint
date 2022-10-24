import React from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import EditProduct from "../components/EditProduct";

import { useAuth0 } from "@auth0/auth0-react";

const baseurl = process.env.REACT_APP_BACKEND_API_URL;  

const ProductItem = ({ product }) => {
  const { products, dispatch } = useProductsContext();
  const { user, getAccessTokenSilently } = useAuth0();  

  const handleClick = async () => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${baseurl}/api/products/${product.Dish_id}`, {
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
