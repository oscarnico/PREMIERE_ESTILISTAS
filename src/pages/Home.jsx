import "./Home.css";
import heroDesk from "../assets/hero-desk.jpeg";
import heroMovil from "../assets/hero-movil.jpeg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import vanesa from "../assets/vane.png";
import instagramBg from "../assets/instagram-section.png";
import google1 from "../assets/google1.jpeg";
import google2 from "../assets/google2.png";
import google3 from "../assets/google3.png";
import google4 from "../assets/google4.png";
import google5 from "../assets/google5.png";
import loreal from "../assets/loreal.webp";
import jeanpaulmyne from "../assets/jeanpaulmyne.jpg";
import redken from "../assets/redken.png";
import organethic from "../assets/organethic.jfif";
import inoa from "../assets/inoa.png";

export default function Home() {
  const [bgImage, setBgImage] = useState(heroDesk);
  const carouselRef = useRef(null); // ✅ Correcto para refs

  // Funciones para desplazar
  const scroll = (direction) => {
    if (carouselRef.current) {
      // Nota: necesitas .current
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage(heroMovil);
      } else {
        setBgImage(heroDesk);
      }
    };

    handleResize(); // al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-div-text">
          <h1>PREMIÈRE ESTILISTAS</h1>
          <p className="hero-p">
            Profesionalidad sin perder la cercanía, calidad sin perder la
            esencia.
          </p>
        </div>
        <Link to="/citas" className="hero-button">
          Reservar cita
        </Link>
      </section>

      <section className="experience">
        {/* BLOQUE 1 */}
        <div className="experience-row">
          <div className="experience-text">
            <h2>Descubre nuestras experiencias únicas</h2>
            <p>
              En Premiére Estilistas podrás encontrar las últimas tendencias.
            </p>
            <p>
              Cada visita es una experiencia única. Nuestro equipo de expertos
              estilistas se dedica a ofrecerte un servicio personalizado.
            </p>
          </div>

          <div className="experience-image">
            <img src={vanesa} alt="Premiére Estilistas - Vane" />
          </div>
        </div>
        {/* BLOQUE 2 */}
        <div className="experience-row reverse">
          <div className="experience-text">
            <h2>Profesionalidad y cercanía</h2>
            <p>
              Trabajamos cada detalle para que tu experiencia sea exclusiva.
            </p>
            <p>Cuidamos tu imagen respetando tu esencia y personalidad.</p>
          </div>

          <div className="experience-image">
            <img src={vanesa} alt="Premiére Estilistas - Vane" />
          </div>
        </div>
      </section>

      {/* ===== MARCAS ===== */}
      <section className="brands-section">
        <div className="brands-container">
          <h2>Trabajamos con las mejores marcas</h2>
          <p className="brands-subtitle">
            Calidad profesional para ofrecerte resultados excepcionales
          </p>

          <div className="brands-logos">
            <img src={loreal} alt="L'Oréal Professionnel" />
            <img src={jeanpaulmyne} alt="Jean Paul Mynè" />
            <img src={redken} alt="Redken" />
            <img src={organethic} alt="Organethic" />
            <img src={inoa} alt="Inoa by L'Oréal" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section
        className="instagram"
        style={{ backgroundImage: `url(${instagramBg})` }}
      >
        <div className="instagram-content">
          <h2>Síguenos en Instagram</h2>
          <p>@premiereestilistas</p>

          <a
            href="https://www.instagram.com/premiereestilistas/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            Ver perfil
          </a>
        </div>
      </section>

      {/* GOOGLE */}
      <section className="reviews-section">
        <div className="reviews-header">
          <h3>Lo que dicen nuestros clientes</h3>
          <h4>Testimonios</h4>

          <div className="stars">★★★★★</div>

          <h6>Valoración media en Google</h6>

          <div className="google-logo">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow left"
            onClick={() => scroll("left")}
          >
            ❮
          </button>

          <div className="reviews-carousel" ref={carouselRef}>
            <div
              className="review-card"
              style={{ backgroundImage: `url(${google1})` }}
            ></div>
            <div
              className="review-card"
              style={{ backgroundImage: `url(${google2})` }}
            ></div>
            <div
              className="review-card"
              style={{ backgroundImage: `url(${google3})` }}
            ></div>
            <div
              className="review-card"
              style={{ backgroundImage: `url(${google4})` }}
            ></div>
            <div
              className="review-card"
              style={{ backgroundImage: `url(${google5})` }}
            ></div>
          </div>

          <button
            className="carousel-arrow right"
            onClick={() => scroll("right")}
          >
            ❯
          </button>
        </div>
      </section>
    </div>
  );
}
