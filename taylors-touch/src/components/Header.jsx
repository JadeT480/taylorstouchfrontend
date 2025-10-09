import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/register">Sign Up</Link>{" "}
        <Link to="/login">Login</Link>{" "}
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;