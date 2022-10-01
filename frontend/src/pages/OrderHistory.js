// Order History Component
// Component will display the order history of a user's account
// Here they will be able view it
// {formatDistanceToNow(new Date(profile.createdAt), { addSuffix: true })}

// Might have the card layout as this
// ROW 1: COL 1(ORDER) COL2 Order Date
// ROW 2: COL 1 (ITEM) COL 2 ORDER Price
// REPEAT FOR THE NUMBER OF ITEMS
// ROW 2: COL 1 (ITEM) COL 2 ORDER Price


import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import { Accordion } from "react-bootstrap"

const baseurl = process.env.REACT_APP_BACKEND_API_URL;  

const OrderHistory = () => {

    // Defining state for orderLine and dishes table
    const [orders, setOrders] = useState([]);
    const [dishes, setDishes] = useState([]);    
    const { user } = useAuth0();

    // Retrieve the orders for the user
    useEffect(() => {
        const fetchOrders = async () => {
            //const response = await axios.get(`${baseurl}/api/profile/${user?.email}/orders`);
            // TEST PURPOSES
            const response = await axios.get(`${baseurl}/api/profile/test@gmail.com/orders`);

            if (response.status == 200) {
                setOrders(response.data)
            }
        }
        fetchOrders();
    }, [user?.email]);

    // Retrieve the contents of the order from the user
    useEffect(() => {
        const fetchDishes = async () => {
          const response = await axios.get(`${baseurl}/api/menu/`);
  
          if (response.status == 200) {
              setDishes(response.data)
          }
        }
        fetchDishes();
    }, []);    

    //Retrieve names from dishes
    const namesList = dishes.map((item) => {
        return item.DishName;
    })

    //Retrieve prices from dishes
    const priceList = dishes.map((item) => {
        return item.Price;
    })

    return (
        <div className="container-fluid p-5 ">  
            <h2 className="text-warning text-center">Order History</h2>          
            <Accordion defaultActiveKey="0">
                {
                    orders.map((item, index) => 
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{item.order.Date} - Order #{item.order.Order_id}</Accordion.Header>
                            <Accordion.Body>
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item #</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* For each item in data, display id, quantity and price */}
                                        {item.orderLines.map((item, index) => (
                                            <tr key={index}>
                                                <th>{parseInt(index) + 1}</th>
                                                <th>{namesList[item.Dish_id]}</th>
                                                <th>{item.OrderQuantity}</th>
                                                <th>${item.OrderQuantity * priceList[item.Dish_id]}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Accordion.Body>
                        </Accordion.Item>                    
                    )
                }
            </Accordion>      
        </div>
    )
}
export default OrderHistory;