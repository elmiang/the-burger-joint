import React from "react";

const CheckoutItem = () => {
    return (
         
         <div className="col">
         <div className="card h-100 w-100">
             <img src="./Placeholder.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                     <h5 className="card-title">Name</h5>
                     <p className="card-text">Price: $10</p>
                     <p className="fw-bold">Quantity: 1</p>
                     <div>
                        <button className="btn btn-outline-success rounded-circle">+</button>
                        <button className="btn btn-outline-danger rounded-circle m-3">-</button>
                     </div>
                 </div>
         </div>
        </div>
    );
};
export default CheckoutItem;