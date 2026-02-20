import "./Footer.css";
import { useEffect } from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 },
    );
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer fade-in">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Première Estilistas</h3>
          <p>C. del Monte Esquinza, 35</p>
          <p>Chamberí, 28010 Madrid</p>
          <p>Tel: 91 115 20 49</p>
        </div>

        <div className="footer-right">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/premiereestilistas/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="social-icon"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="social-icon"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.4 3h-2.9v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
          <img
            src={logo}
            alt="Première Estilistas logo"
            className="footer-logo"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Premiére Estilistas</p>
        <p className="designer-credit">
          Diseño y desarrollo:{" "}
          <a href="mailto:nicolas.oscar@outlook.es">
            Contacta con Óscar Nicolás
          </a>
        </p>
      </div>
    </footer>
  );
}
