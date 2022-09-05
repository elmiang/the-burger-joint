import React from "react";

const CheckoutItem = () => {
    return (
         
         <div class="col">
         <div class="card h-100 w-100">
             <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                 <div class="card-body">
                     <h5 class="card-title">Name</h5>
                     <p class="card-text">Price: $10</p>
                     <p class="fw-bold">Quantity: 1</p>
                     <div>
                        <button type="button" class="btn btn-secondary">+</button>
                        <button className="btn btn-sm btn-outline-danger">-</button>
                     </div>
                 </div>
         </div>
        </div>
    );
};
export default CheckoutItem;