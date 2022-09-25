import React from "react";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

  const SalesGraph = () => {
        return ( 
            <ResponsiveContainer width="100%" height = {500}>
                <BarChart width={1000} height={500} data={data} layout="horizontal">
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="pv" fill="#4FC8D1" />
                    <Bar dataKey="uv" fill="#F531A8" />
                </BarChart>
            </ResponsiveContainer>
        );
};
export default SalesGraph;