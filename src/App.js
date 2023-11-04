import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [user, setUser] = useState({})
  const handleLogin = (data) => {
    setLoggedInStatus("LOGGED_IN")
    setUser(data.user)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
      </Routes>
    </div>
  );
}

export default App;
