import "./header.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="index.html" className="nav__logo">
          Rohit
        </a>

        <div className={`nav__menu ${menuOpen ? "nav__menu--open" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </div>
      </nav>
    </header>
  );
}
