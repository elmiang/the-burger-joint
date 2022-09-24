import React from 'react';
import SalesTable from '../components/SalesTable';
import SalesGraph from '../components/SalesGraph';
const Sales = () => {
    return ( 
        
        <div class="container-fluid p-5 ">  
             <h3 class="text-warning text-center">Sales Statistics</h3>   
                <div class="col mx-auto mt-4 p-5">
                    {/* Sales Statistics */}
                    <SalesGraph/>
                </div>

            <h3 class="text-warning text-center">Sales History</h3>  
                <div class="col mx-auto mt-5">
                    {/* Sales History */}
                <SalesTable/>
                </div>
        </div>
        );
};

export default Sales;