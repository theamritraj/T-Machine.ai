import { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    fetch("/src/data/navbarData.json")
      .then((response) => response.json())
      .then((data) => setNavItems(data))
      .catch((error) => console.error("Error loading navbar data:", error));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="./src/assets/navBar/logo.svg"
          alt="logo"
          className="navbar-logo"
        />
      </div>

      {/* Navbar icons */}
      <div className="navbar-icons">
        {/* First icon toggles dark mode */}
        {navItems.length > 0 && (
          <img
            src={darkMode ? "/src/assets/navBar/moon.png" : "/src/assets/navBar/moon.png"}
            alt="Toggle Dark Mode"
            className="navbar-icon"
            onClick={toggleTheme}
          />
        )}

        {/* Other icons */}
        {navItems.slice(1).map((item, index) => (
          <img key={index + 1} src={item.src} alt={item.alt} className="navbar-icon" />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
