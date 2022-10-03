import { useState } from "react";
import { useProductsContext } from "../hooks/useProductsContext";

const EditProduct = ({ product }) => {
  const { dispatch } = useProductsContext();

  const [Dish_id, setDish_id] = useState(product.Dish_id);
  const [DishName, setDishName] = useState(product.DishName);
  const [Category, setCategory] = useState(product.Category);
  const [Description, setDescription] = useState(product.Description);
  const [Price, setPrice] = useState(product.Price);
  const [ingredients, setIngredients] = useState(product.ingredients);
  const [imageURL, setImageURL] = useState(product.imageURL);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState("");
  {
    /*
    useEffect(() => {
      const fetchProduct = async () => {
        const response = await fetch("/api/products/" + product.Dish_id);
        const json = await response.json();

        if (response.ok) {
          setDish_id(product.Dish_id);
          setDishName(product.DishName);
          setCategory(product.Category);
          setDescription(product.Description);
          setPrice(product.Price);
          setIngredients(product.ingredients);
          setImageURL(product.imageURL);
          dispatch({ type: "EDIT_PRODUCTS", payload: json });
        }
      };
      fetchProduct();
    });
  */
  }
  {
    /*}
  const getProduct = async (id) => {
    
  }
*/
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedProduct = {
      Dish_id,
      DishName,
      Category,
      Description,
      Price,
      ingredients,
      imageURL,
    };
    const response = await fetch("/api/products/" + editedProduct.Dish_id, {
      method: "POST",
      body: JSON.stringify(editedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

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
      setIngredients("");
      setImageURL("");
      setError(null);
      setEmptyFields([]);
      console.log("product updated", json);
      dispatch({ type: "EDIT_PRODUCT", payload: json });
    }
  };

  return (
    <div className="modal fade" tabIndex="-1" id="editProduct">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal=title text-warning">Edit Product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <form className="edit" onSubmit={handleSubmit}>
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
                  Dish_id
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
                  onChange={(e) => setIngredients(e.target.value.split(", "))}
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
              {error && <div className="error text-warning">{error}</div>}
              <button type="submit" className="btn btn-warning m-1">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
