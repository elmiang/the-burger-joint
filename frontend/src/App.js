import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Test</h1>
        <LoginButton/>
        <LogoutButton/>
      </main>
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </div>
  );
}

export default App;