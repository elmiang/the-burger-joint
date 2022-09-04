import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./pages/Cart"
import Footer from "./components/Footer";
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      
      <Sidebar/>
      <Menu/>
      <Cart />
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Footer />
    </div>
  );
}

export default App;
