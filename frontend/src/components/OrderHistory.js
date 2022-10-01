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

const OrderHistory = () => {

    // Defining state for orderLine and dishes table
    const [orderLines, setOrderLines] = useState([]);
    const [dishes, setDishes] = useState([])

    // Retrieve the orderLine
    useEffect(() => {
        const fetchOrderLine = async () => {
        }
    })

    return (
        <div style={{ color:"white"}}>
            <div>
            <h4>Order Number: 123</h4>
            <h5>Order Details: 123</h5>
            <p><strong>Order Items </strong></p>
            <p><strong>Item One: Burger $ </strong></p>
            <p></p>                
            </div>
        </div>
    )
}
export default OrderHistory;