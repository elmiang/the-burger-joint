import React from "react";

const ProductItem = (props) => {
  return (
    <a className="list-group-item  align-items-start list-group-item-action">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        id={props.id}
      ></input>
      <label className="stretched-link" for={props.id}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.name}</h5>
        </div>
      </label>
      <p className="mb-1">Burger description</p>
    </a>
  );
};

export default ProductItem;
