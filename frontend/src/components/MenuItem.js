import React from "react";

const MenuItem = () => {
    return ( 
         
         <div className="col">
         <div className="card h-100 w-100">
             <img src="./Placeholder.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                     <h5 className="card-title">Title</h5>
                     <p className="card-text">Food Information</p>
                     <p className="fw-bold">$ Price</p>
                     <button type="button" className="btn btn-secondary">Add to Cart</button>
                 </div>
         </div>
        </div>
    );
};
export default MenuItem;