import React from "react";
import { useState } from "react";
import { useProductsContext } from "../hooks/useProductsContext";

const AddProduct = () => {
  const { dispatch } = useProductsContext();

  const [Dish_id, setDish_id] = useState("");
  const [DishName, setDishName] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      Dish_id,
      DishName,
      Category,
      Description,
      Price,
      ingredients,
      imageURL,
    };
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(emptyFields);
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setDish_id("");
      setDishName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setIngredients([]);
      setImageURL("");
      setError(null);
      setEmptyFields([]);
      console.log("new product added", json);
      dispatch({ type: "CREATE_PRODUCT", payload: json });
    }
  };

  return (
    <div className="modal fade" tabIndex="-1" id="addProduct">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal=title">Add Product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <form className="create" onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className={
                    emptyFields.includes("Dish_id")
                      ? "error form-control"
                      : "form-control"
                  }
                  placeholder="dish_id"
                  id="idInput"
                  onChange={(e) => setDish_id(e.target.value)}
                  value={Dish_id}
                ></input>
                <label className="text-muted fs-6" htmlFor="idInput">
                  ID
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    emptyFields.includes("DishName")
                      ? "error form-control"
                      : "form-control"
                  }
                  placeholder="productName"
                  id="nameInput"
                  onChange={(e) => setDishName(e.target.value)}
                  value={DishName}
                ></input>
                <label className="text-muted fs-6" htmlFor="nameInput">
                  Product Name
                </label>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <div className="form-floating">
                  <input
                    type="number"
                    className={
                      emptyFields.includes("Price")
                        ? "error form-control"
                        : "form-control"
                    }
                    placeholder="Price"
                    id="priceInput"
                    onChange={(e) => setPrice(e.target.value)}
                    value={Price}
                  ></input>
                  <label className="text-muted fs-6" htmlFor="priceInput">
                    Price
                  </label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    emptyFields.includes("Category")
                      ? "error form-control"
                      : "form-control"
                  }
                  placeholder="Category"
                  id="categoryInput"
                  onChange={(e) => setCategory(e.target.value)}
                  value={Category}
                ></input>
                <label className="text-muted fs-6" htmlFor="categoryInput">
                  Category
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingredients"
                  id="ingredientsInput"
                  onChange={(e) => setIngredients(e.target.value.split(","))}
                  value={ingredients}
                ></input>
                <label className="text-muted fs-6" htmlFor="ingredientsInput">
                  Ingredients
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    emptyFields.includes("Description")
                      ? "error form-control"
                      : "form-control"
                  }
                  placeholder="Description"
                  id="descriptionInput"
                  onChange={(e) => setDescription(e.target.value)}
                  value={Description}
                ></input>
                <label className="text-muted fs-6" htmlFor="descriptionInput">
                  Description
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="url"
                  className={
                    emptyFields.includes("ImageURL")
                      ? "error form-control"
                      : "form-control"
                  }
                  placeholder="imageURL"
                  id="imageURLInput"
                  onChange={(e) => setImageURL(e.target.value)}
                  value={imageURL}
                ></input>
                <label className="text-muted fs-6" htmlFor="imageURLInput">
                  ImageURL
                </label>
              </div>
            </div>
            <div className="modal-footer bg-dark">
              {error && <div className="error">{error}</div>}
              <button type="submit" className="btn btn-warning m-1">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
