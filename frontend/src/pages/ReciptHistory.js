//import { set } from "mongoose";
import React from 'react'
import { useEffect, useState } from 'react'
import ReciptDetails from '../components/ReciptDetails'


const OrderHistory = () => {
    const [recipts, setRecipts] = useState(null)

    useEffect(() => {
        const fetchRecipts = async () => {
            const response = await fetch('/api/recipts/')
            const json = await response.json() 

            if (response.ok) {
                setRecipts(json)
            }
        }

        fetchRecipts()
    }, [])
    
    return ( 
        <div class="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
                <div class="col py-5 p-5 rounded-2" tabindex="0">
                <h3 id="reciptHeading" class="p-1 text-white text-center">Order History</h3>
                <div className="recipts" class="text-center d-flex flex-column align-items-center">
                    {recipts && recipts.map((recipt) => (
                        <ReciptDetails key={recipt._id} recipt={recipt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OrderHistory;