import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import Cart from "./pages/Cart"
import Menu from './pages/Menu';
import Sales from './pages/Sales';
import Callback from './pages/Callback';
import Products from './pages/Products';
import Tickets from './pages/Tickets';
import ReciptHistory from './pages/ReciptHistory';
import AdminTickets from './pages/AdminTickets';
import ProfileDetails from './pages/ProfileDetails';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route 
              path="/menu" 
              element={<Menu />}
            />
            <Route 
              path="/cart" 
              element={<Cart />}
            />
            <Route 
              path="/checkout"
              element={<Checkout/>}
            />
            <Route 
              path="/sales" 
              element={<Sales />}
            />
            <Route 
              path="/products"
              element={<Products/>}
            />
            <Route 
              path="/profile"
              element={<ProfileDetails/>}
            />            
            <Route 
              path="/orderhistory"
              element={<OrderHistory/>}
            />             
            <Route 
              path="/recipthistory"
              element={<ReciptHistory/>}
            />
            <Route 
              path="/tickets"
              element={<Tickets/>}
            />
            <Route 
              path="/admintickets"
              element={<AdminTickets/>}
            />
            <Route 
              path="/"
              element={<Navigate replace to="/menu"/>}
            />
            <Route path="/callback" element={<Callback/>}/>
            {/* <p>{!data ? "Loading..." : data}</p> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
