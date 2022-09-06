import React from "react";

const AddProduct = () => {
  return (
    <div className="modal fade" tabindex="-1" id="addProduct">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal=title">Add Product</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="productName"
                id="nameInput"
              ></input>
              <label className="text-muted fs-6" for="nameInput">
                Product Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="description"
                id="descriptionInput"
              ></input>
              <label className="text-muted fs-6" for="descriptionInput">
                Description
              </label>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <div className="form-floating">
                <input
                  className="form-control"
                  placeholder="Price"
                  id="priceInput"
                ></input>
                <label className="text-muted fs-6" for="priceInput">
                  Price
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer bg-dark">
            <button type="button" class="btn btn-warning m-1">
              Add
            </button>
            <button
              type="button"
              class="btn btn-secondary m-1"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
