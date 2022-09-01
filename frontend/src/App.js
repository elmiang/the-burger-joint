import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./pages/Cart"

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
    </div>
  );
}

export default App;