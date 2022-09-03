import React from "react";


const Menu = () => {
    return ( 
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 bg-dark">
                {/* Side Bar */}
                    <div id="sidebar" class="col-xl-2 pt-5 p-2 text-white text-center list-group fixed-top">
                        <a class="list-group-item list-group-item-action" href="#section-1">Section 1</a>
                        <a class="list-group-item list-group-item-action" href="#section-2">Section 2</a>
                    </div>
                </div>

                {/* Menu */}
                <div data-bs-spy="scroll" data-bs-target="#sidebar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="col py-5 p-5 scrollspy-example rounded-2" tabindex="0">
                    
                    {/* Menu: Section 1*/}
                    <h3 id="section-1" class="p-2">Section 1</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        {/* Item 1 */}
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

                        {/* Item 2 */}
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

                        {/* Item 3 */}
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

                        {/* Item 4 */}
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

                        {/* Item 5 */}
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

                        {/* Item 6 */}
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
                    </div>
                     {/* End of Section 1 */}


                      {/* Menu: Section 2*/}
                    <h3 id="section-2" class="p-3">Section 2</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        {/* Item 1 */}
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

                        {/* Item 2 */}
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

                        {/* Item 3 */}
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

                        {/* Item 4 */}
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

                        {/* Item 5 */}
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

                        {/* Item 6 */}
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
                    </div>
                     {/* End of Section 2 */}

                     

                </div>
               

            </div>
        </div>
    );
};
export default Menu;