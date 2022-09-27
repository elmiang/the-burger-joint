import React from "react";


const SalesTable = (props) => {

    return ( 
        
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Amount Sold</th>
                        <th scope="col">Cash Total</th>
                    </tr>
                </thead>

                <tbody>
                    {props.details.map((item, index) => (
                        <tr key={index}>
                            <th>{parseInt(index) + 1}</th>
                            <th>{item.Dish_id}</th>
                            <th>{item.OrderQuantity}</th>
                            <th>{item.TotalPrice}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        
    );
};
export default SalesTable;