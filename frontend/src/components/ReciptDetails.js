import React from "react";
import { useState } from "react"

const ReciptDetails = ({ recipt }) => {
    const [itemArray, setItemArray] = useState([])
    //setItemArray(recipt.Items.split("|"))
    //setValuesArray()
    //const itemArray = recipt.Items.split("|");
    //const baseurl = process.env.REACT_APP_BACKEND_API_URL; 
    /*const testItems = [
        {name: "clown cake", quantity: "3", price: "12.00"},
        {name: "burger", quantity: "4", price: "26.00"}
    ];
    document.getElementById("ItemSection").innerHTML = testItems.map(ItemisedBill);
    function ItemisedBill(items) {
        return [items.name," x",items.quantity,"...",items.price].join("");
    }*/

    /*document.getElementById("ItemSection").innerHTML = recipt.Items.map(ItemisedBill);
    function ItemisedBill(items) {
        return [items.name, items.quantity, items.price].join("");
    }*/
    /*const itemArray = {
        names: "",
        quantity: "",
        price: ""
    }
    const index = 0;
    recipt.Items.forEach(element => {
        itemArray[index].names = element.Item_Name;
        itemArray[index].quantity = element.Item_Quantity;
        itemArray[index].price = element.Item_Price;
    });*/


    return (
        <div className="recipt-details" class="card h-50 w-50 m-3">
                <div class="card-body bg-light">
                    <h4>Recipt</h4>
                    <p><strong>Billing Items</strong></p>
                    <p id="ItemSection">{recipt.Items}</p>
                    <p>Total Cost: {recipt.total_price}</p>
                    <br/>
                    <p><strong>Payment Details</strong></p>
                    <p>Payment Type: {recipt.Payment_Type}</p>
                    <p>Card No: {recipt.Card_No}</p><br/>
                    <p><strong>Billing Address</strong></p>
                    <p>Address: {recipt.Address_One}</p>
                    <p>Address Two: {recipt.Address_Two}</p>
                    <p>City: {recipt.Address_City}</p>
                    <p>Country: {recipt.Address_Country}</p>
                    <p>{recipt.Contact_SName}, {recipt.Contact_FName}</p>
                    <br/>
                    <p>Recipt ID: {recipt._id}</p>
                    <p>Generated at: {recipt.createdAt}</p>
                </div>
        </div>
    )
    
}


                    
export default ReciptDetails