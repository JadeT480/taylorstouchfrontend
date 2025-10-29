import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/auth/user", { credentials: "include" }).then(res => {
      if (res.ok) return res.json();
      throw new Error("Not authenicated");
    }).then(data => setUser(data)).catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>Welcome, {user.name}</h1>
            <a href="http://localhost:3000/auth/logout">Logout</a>
          </div>
        ) : (
          <a href="http://localhost:3000/auth/google">Login with Google</a>
        )}
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </>
  );
}

export default App;