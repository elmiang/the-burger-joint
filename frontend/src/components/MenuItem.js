import React from "react";

const MenuItem = (props) => {
    return ( 

        <div class="col"> 
            <div class="card h-100 w-100" >
                <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="fw-bold">${props.price}</p>
                        <button type="button" class="btn btn-secondary">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};
export default MenuItem;