import React from "react";


const CheckoutBar = () => {
    return ( 
        <div class="container-fluid">
            <div id="sidebar" class="d-flex flex-column gap-2 gx-5 col-xl-1 pt-5 p-3 text-center list-group">
                <a class="list-group-item list-group-item-action" href="#CheckoutItems">Cart Items</a>
                <a class="list-group-item list-group-item-action" href="#PaymentInput">Payment Details</a>
                <a class="list-group-item list-group-item-action" href="#AddressInput">Address</a>
                <a class="list-group-item list-group-item-action" href="#ContactInput">Contact Details</a>
                <a class="list-group-item list-group-item-action" href="#Order">Order</a>
            </div>
        </div>
    );
};
export default CheckoutBar;