import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import Cart from "./pages/Cart"
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Callback from './pages/Callback';
import Products from './pages/Products';
import ProfileDetails from './components/ProfileDetails';
import OrderHistory from './components/OrderHistory';


function App() {

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
              path="/"
              element={<Navigate replace to="/menu"/>}
            />
            <Route path="/callback" element={<Callback/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
