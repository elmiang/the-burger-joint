import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ProfileDetails from './components/ProfileDetails';
import OrderHistory from './components/OrderHistory';

import Cart from "./pages/Cart"
import Menu from './pages/Menu';
import Sales from './pages/Sales';
import Callback from './pages/Callback';

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
              path="/sales" 
              element={<Sales />}
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
