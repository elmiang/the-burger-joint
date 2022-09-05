import React from "react";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutBar from "../components/CheckoutBar";

const Checkout = () => {
    return ( 
        <div class="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
            <div class="row">
            <CheckoutBar/>
                <div /*data-bs-spy="scroll" data-bs-target="#checkoutbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" */class="col py-5 p-5 rounded-2" tabindex="0">
                    {/*Checkout: Cart Items */}
                    <h3 id="CheckoutItems" class="p-1 text-white">Cart Items</h3>
                    <div class="row row-cols-1 row-cols-md-4 g-3">
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                        <CheckoutItem/>
                    </div>
                    {/*End of Cart Items*/}


                    {/*Checkout: Payment Options & Details*/}
                    <h3 id="PaymentInput" class="p-2 text-white">Payment Options/Details</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4 bg-light m-2 rounded ">
                        
                        <div class="col">
                            <label for="Visa">Visa</label>
                            <input type="radio" id="Visa" name="payment_type"></input><br></br>
                            <label for="Mastercard">Mastercard</label>
                            <input type="radio" id="Mastercard" name="payment_type"></input><br></br>
                            <label for="Paypal">Paypal</label>
                            <input type="radio" id="Paypal" name="payment_type"></input>
                        </div> 
                        <div class="col">
                            <label>Card Number</label>
                            <input type="text" id="CardNo"></input>
                            <label>Expiration Date</label>
                            <select id="ExpirationDay">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select id="ExpirationYear">
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                            </select>
                            <input type="text" id="Expiary"></input>
                            <label>CSV</label>
                            <input type="text" id="CardNo"></input>
                        </div>
                    </div>
                    {/* End of Payment Options & Details */}

                    {/*Checkout: Address Details*/}
                    <h3 id="AddressInput" class="p-3 text-white">Address Details</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4 m-2 bg-light">
                        <p>line 1</p>
                        <p>line 2</p>
                        <p>line 3</p>
                        <p>line 4</p>
                    </div>
                     {/*End of Address Details*/}
                     
                     {/*Checkout: Order*/}
                    <h3 id="Order" class="p-4 text-white m-2">Order</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4 m-2">
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