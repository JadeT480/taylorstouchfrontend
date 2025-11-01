import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Taylor's Touch</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>{" "}
        <Link to="/massages">Massages</Link>{" "}
        <Link to="/register">Sign Up</Link>{" "}
        <Link to="/login">Login</Link>{" "}
        <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;