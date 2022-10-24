const ReciptDetails = ({ recipt }) => {
    
    //document.getElementById("item").innerHTML = recipt.Items.map(ItemisedBill);
    //function ItemisedBill(items) {
    //    return [items.name, items.quantity, items.price].join("");
    //}

    return (
        <div className="recipt-details" class="card h-50 w-50 m-3">
                <div class="card-body bg-light">
                    <h4>Recipt</h4>
                    <p><strong>Billing Items</strong></p>
                    <p id="item"></p>
                    
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