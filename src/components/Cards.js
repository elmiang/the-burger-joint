import React from "react";


const Cards = () => {
    return ( 
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            {/* Card */}
            <div class="col">
                <div class="card h-100 w-100">
                    <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                            <p class="fw-bold">$ Price</p>
                            <button type="button" class="btn btn-secondary">Add to Cart</button>
                        </div>
                </div>
            </div>

             {/* Card */}
             <div class="col">
                <div class="card h-100 w-100">
                    <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                            <p class="fw-bold">$ Price</p>
                            <button type="button" class="btn btn-secondary">Add to Cart</button>
                        </div>
                </div>
            </div>

             {/* Card */}
             <div class="col">
                <div class="card h-100 w-100">
                    <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                            <p class="fw-bold">$ Price</p>
                            <button type="button" class="btn btn-secondary">Add to Cart</button>
                        </div>
                </div>
            </div>

             {/* Card */}
             <div class="col">
                <div class="card h-100 w-100">
                    <img src="./Placeholder.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                            <p class="fw-bold">$ Price</p>
                            <button type="button" class="btn btn-secondary">Add to Cart</button>
                        </div>
                </div>
            </div>

        </div>
    );
};
export default Cards;