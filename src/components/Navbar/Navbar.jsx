import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`nav-content ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-links">
          <Link to="about" smooth duration={600} offset={-80} onClick={toggleMenu}>ABOUT</Link>
          <Link to="partners" smooth duration={600} offset={-80} onClick={toggleMenu}>FIRMS</Link>
          <Link to="testimonials" smooth duration={600} offset={-80} onClick={toggleMenu}>TESTIMONIALS</Link>
          <Link to="contact" smooth duration={600} offset={-80} onClick={toggleMenu}>CONTACT</Link>
        </div>
        <a href="#contact" className="nav-cta" onClick={toggleMenu}>Book Appointment</a>
      </div>
    </nav>
  );
}