import React from "react";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutBar from "../components/CheckoutBar";

const Checkout = () => {
    return ( 
        
        <div class="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
            <div class="row">
            <CheckoutBar/>
                <div class="col-2 bg-dark"></div>
                <div data-bs-spy="scroll" data-bs-target="#checkoutbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="col py-5 p-5 scrollspy-example rounded-2" tabindex="0">
                    {/*Checkout: Cart Items */}
                    <h3 id="CheckoutItems" class="p-1 text-white">Cart Items</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                    </div>
                    {/*End of Cart Items*/}


                    {/*Checkout: Payment Options & Details*/}
                    <h3 id="PaymentInput" class="p-2 text-white">Payment Options/Details</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <p>line 1</p>
                        <p>line 2</p>
                        <p>line 3</p>
                        <p>line 4</p>
                    </div>
                    {/* End of Payment Options & Details */}

                    {/*Checkout: Address Details*/}
                    <h3 id="AddressInput" class="p-3 text-white">Address Details</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <p>line 1</p>
                        <p>line 2</p>
                        <p>line 3</p>
                        <p>line 4</p>
                    </div>
                     {/*End of Address Details*/}
                     
                     {/*Checkout: Order*/}
                    <h3 id="Order" class="p-4 text-white">Order</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <form>
                            <button>Order</button>
                        </form>
                    </div>
                     {/*End of Order*/}
                </div>
            </div>
        </div>
    );
};
export default Checkout;