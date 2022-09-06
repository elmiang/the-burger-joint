import React from "react";

const ProductItem = (props) => {
  return (
    <a class="list-group-item  align-items-start list-group-item-action">
      <input
        class="form-check-input me-1"
        type="checkbox"
        value=""
        id={props.id}
      ></input>
      <label class="stretched-link" for={props.id}>
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{props.name}</h5>
        </div>
      </label>
      <p class="mb-1">Burger description</p>
    </a>
  );
};

export default ProductItem;
