import React from "react";

const MenuItem = (props) => {
    return ( 
        <div className="col"> 
            <div className="card" >
                <div className="card-image">
                    <img src={props.url} className="card-img-top" alt="..."></img>
                </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="fw-bold">${props.price}</p>
                        <button type="button" className="btn btn-secondary">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};
export default MenuItem;