import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext"; 
import "../styles/navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext); 

  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch("/src/data/navbarData.json")
      .then((response) => response.json())
      .then((data) => setNavItems(data))
      .catch((error) => console.error("Error loading navbar data:", error));
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="./public/assets/navBar/logo.svg"
          alt="logo"
          className="navbar-logo"
        />
      </div>

      {/* Navbar icons */}
      <div className="navbar-icons">
        {/* Dark Mode Toggle */}
        <img
          src={darkMode ? "/public/assets/navBar/moon.png" : "/public/assets/navBar/moon.png"}
          alt="Toggle Dark Mode"
          className="navbar-icon"
          onClick={() => setDarkMode(!darkMode)}
        />

        {/* Other icons */}
        {navItems.slice(1).map((item, index) => (
          <img key={index + 1} src={item.src} alt={item.alt} className="navbar-icon" />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
