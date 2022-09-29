import React from "react";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';

  const SalesGraph = (props) => {
     
    var mergedData = props.orderData.reduce((acc, row) => {
        const existingSel = acc.find(e => e.Dish_id === row.Dish_id);
        
        // If we don't have an entry, make one.
        if (!existingSel) {
          // Use expansion of row to avoid mutating source objects
          return [ ...acc, { ...row}];
        }
        
        if (Array.isArray(existingSel.OrderQuantity)) {
          // if the topicName is an array, add to it.
          existingSel.OrderQuantity.push(row.OrderQuantity);
        } else {
          // Otherwise, make it an array with the two options.
          existingSel.OrderQuantity += row.OrderQuantity;
        }
        return acc;
      }, []);

      const namesList = props.dishData.map((item) => {
        return item.DishName;
      })

      const priceList = props.dishData.map((item) => {
        return item.Price;
      })
      
      //Sort mergedData by Dish_id, ascending
      const sortedData = [...mergedData].sort((a, b) => a.Dish_id - b.Dish_id);

      var salesTotal = 0;

      //Translating Dish_id into Dish names
      sortedData.forEach(function(element, index) {
            element.Dish_id = namesList[index];
      });

      sortedData.forEach(function(element, index) {
            salesTotal += (element.OrderQuantity * priceList[index]);
      });

    
    return ( 
            
            <div>
                <h3 class="text-white text-center">Total Sales: ${salesTotal}</h3> 
                <ResponsiveContainer width="100%" height = {500}>
                    <BarChart width={1000} height={500} data={sortedData} layout="horizontal">
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="Dish_id" />
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="OrderQuantity" fill="#4FC8D1" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
};
export default SalesGraph;