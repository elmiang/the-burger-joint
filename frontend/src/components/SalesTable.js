import React from "react";


const SalesTable = () => {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>

                {/* 
                
                 <tbody>
                    {items?.map((item, index) => (
                        <tr key={index}>
                            <th>{parseInt(index) + 1}</th>
                            <th>{item.image}</th>
                            <th>{item.name}</th>
                            <th>{item.price}</th>
                            <th>{item.quantity}</th>
                            <th>{item.supplier}</th>
                            <th>{item.about}</th>
                        </tr>
                    ))}
                </tbody>
                        
                
                */}
            </table>
        
    );
};
export default SalesTable;