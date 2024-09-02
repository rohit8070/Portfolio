import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
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

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`}>
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
          <span
            className="nav__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </span>
        </div>
        <button
          className="nav__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
