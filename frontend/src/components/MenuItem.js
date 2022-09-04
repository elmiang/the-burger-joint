import React from "react";

const MenuItem = () => {
    return ( 
         
         <div class="col">
         <div class="card h-100 w-100">
             <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                 <div class="card-body">
                     <h5 class="card-title">Title</h5>
                     <p class="card-text">Food Information</p>
                     <p class="fw-bold">$ Price</p>
                     <button type="button" class="btn btn-secondary">Add to Cart</button>
                 </div>
         </div>
        </div>
    );
};
export default MenuItem;