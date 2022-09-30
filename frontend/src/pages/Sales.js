import React, { useState, useEffect } from 'react';
import SalesTable from '../components/SalesTable';
import SalesGraph from '../components/SalesGraph';
import axios from "axios";

const Sales = () => {
    //Fetch orderlines from db into "orderLines"
    const [orderLines, setOrderLines,] = useState([]);

    useEffect(() => {
        const fetchOrderLines = async () => {
            const response = await axios.get('/api/sales');

            if (response.status == 200) {
                setOrderLines(response.data)
            }
        }
        fetchOrderLines();
    }, []);

    //Fetch dishes from db into "dishes"
    const [dishes, setDishes] = useState([]);
    
    useEffect(() => {
      const fetchDishes = async () => {
        const response = await axios.get("/api/menu");

        if (response.status == 200) {
            setDishes(response.data)
        }
      }
      fetchDishes();
    }, []);

    return ( 
        
        <div class="container-fluid p-5 ">  
             <h2 class="text-warning text-center">Sales Statistics</h2>   
             {/* <h3 class="text-white text-center">Date</h3>   */}
                <div class="col mx-auto mt-4 p-5">
                    {/* Sales Statistics */}
                    
                    <SalesGraph orderData={orderLines} dishData={dishes}/> 
                    
                </div>

            <h2 class="text-warning text-center">Sales History</h2> 
            {/* <h3 class="text-white text-center">Date</h3>    */}
                <div class="col mx-auto mt-5">
                    {/* Sales History */}
                    <SalesTable orderDetails={orderLines} dishData={dishes}/>
                </div>
        </div>
        );
};

export default Sales;