import React, { useState, useEffect } from 'react';
import SalesTable from '../components/SalesTable';
import SalesGraph from '../components/SalesGraph';
import axios from "axios";

// Bring in Auth0
import { useAuth0 } from "@auth0/auth0-react";

const baseurl = process.env.REACT_APP_BACKEND_API_URL;    

const Sales = () => {

    const { user, getAccessTokenSilently } = useAuth0();    

    //Fetch orderlines from db into "orderLines"
    const [orderLines, setOrderLines,] = useState([]);

    useEffect(() => {
        const fetchOrderLines = async () => {

            const accessToken = await getAccessTokenSilently();

            const response = await axios.get(`${baseurl}/api/sales`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"            
                },                
            });

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
        const response = await axios.get(`${baseurl}/api/menu/`);

        if (response.status == 200) {
            setDishes(response.data)
        }
      }
      fetchDishes();
    }, []);

    //Sort dishes by ID, ascending
    const sortedDishes = [...dishes].sort((a, b) => a.Dish_id - b.Dish_id);
    
    return ( 
        
        <div className="container-fluid p-5 ">  
             <h2 className="text-warning text-center">Sales Statistics</h2>   
             {/* <h3 className="text-white text-center">Date</h3>   */}
                <div className="col mx-auto mt-4 p-5">
                    {/* Sales Statistics */}
                    
                    <SalesGraph orderData={orderLines} dishData={sortedDishes}/> 
                    
                </div>

            <h2 className="text-warning text-center">Sales History</h2> 
            {/* <h3 className="text-white text-center">Date</h3>    */}
                <div className="col mx-auto mt-5">
                    {/* Sales History */}
                    <SalesTable orderDetails={orderLines} dishData={sortedDishes}/>
                </div>
        </div>
        );
};

export default Sales;