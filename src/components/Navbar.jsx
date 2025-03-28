import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import navbarData from "../data/navbarData.json";
import "../styles/navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="/assets/navBar/logo.svg"
          alt="logo"
          className="navbar-logo"
        />
      </div>

      {/* Navbar icons */}
      <div className="navbar-icons">
        {/* Dark Mode Toggle */}
        <img
          src={darkMode ? "/assets/navBar/moon.svg" : "/assets/navBar/moon.svg"}
          alt="Toggle Dark Mode"
          className="navbar-icon"
          onClick={() => setDarkMode(!darkMode)}
        />

        {/* Other icons from JSON */}
        {navbarData.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} className="navbar-icon" />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
