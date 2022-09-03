import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Cart from "./pages/Cart"
import Footer from "./components/Footer";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Cart />
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Footer />
    </div>
  );
}

export default App;