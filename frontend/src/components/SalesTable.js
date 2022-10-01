import React from "react";


const SalesTable = (props) => {

    //Make an array with unique dish ids, add up order quantity, replace ids with names and calcuate total price*/
    //orderDetails : Order_id, Dish_id, OrderQuantity
    //dishData: Dish_id, DishName, Price

    
    var mergedData = props.orderDetails.reduce((acc, row) => {
        const existingSel = acc.find(e => e.Dish_id === row.Dish_id);
        
        // If we don't have an entry, make one.
        if (!existingSel) {
          // Use expansion of row to avoid mutating source objects
          return [ ...acc, { ...row}];
        }
        
        if (Array.isArray(existingSel.OrderQuantity)) {
          // if the OrderQuantity is an array, add to it.
          existingSel.OrderQuantity.push(row.OrderQuantity);
        } else {
          // Otherwise, add to exisiting OrderQuantity
          existingSel.OrderQuantity += row.OrderQuantity;
        }
        return acc;
      }, []);

      //Retrive names from dishes
      const namesList = props.dishData.map((item) => {
        return item.DishName;
      })

      //Retrive prices from dishes
      const priceList = props.dishData.map((item) => {
        return item.Price;
      })
      
      //Sort mergedData by Dish_id, ascending
      const sortedData = [...mergedData].sort((a, b) => a.Dish_id - b.Dish_id);

      //Translating Dish_id into Dish names
      sortedData.forEach(function(element, index) {
            element.Dish_id = namesList[index];
      });

    return ( 
        
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Amount Sold</th>
                        <th scope="col">Cash Total</th>
                    </tr>
                </thead>

                <tbody>
                   {/* For each item in data, display id, quantity and price */}
                    {sortedData.map((item, index) => (
                        <tr key={index}>
                            <th>{parseInt(index) + 1}</th>
                            <th>{item.Dish_id}</th>
                            <th>{item.OrderQuantity}</th>
                            <th>${item.OrderQuantity * priceList[index]}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        
    );
};
export default SalesTable;