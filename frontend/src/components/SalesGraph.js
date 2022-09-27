import React from "react";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';

  const SalesGraph = (props) => {
        return ( 
            <ResponsiveContainer width="100%" height = {500}>
                <BarChart width={1000} height={500} data={props.data} layout="horizontal">
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Dish_id" />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="OrderQuantity" fill="#4FC8D1" />
                    <Bar dataKey="TotalPrice" fill="#F531A8" />
                </BarChart>
            </ResponsiveContainer>
        );
};
export default SalesGraph;