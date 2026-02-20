import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        <img src={logo} alt="Première Estilistas logo" />
      </Link>
      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/sobre-nosotros" onClick={() => setMenuOpen(false)}>
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link to="/servicios" onClick={() => setMenuOpen(false)}>
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/citas" onClick={() => setMenuOpen(false)}>
            Citas
          </Link>
        </li>
        <li>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
