import "./Services.css";
import bannerImg from "../assets/cortes.png";
import colorImg from "../assets/color.png";
import tratamientoImg from "../assets/tratamiento.png";
import alisadoImg from "../assets/alisado.png";
import peinadoImg from "../assets/peinados.png";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services">
      {/* ---------- BANNER ---------- */}
      <section
        className="services-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h2>Nuestros servicios de peluquería</h2>
        </div>
      </section>

      <section className="services-intro">
        <h3>Cortes clásicos y modernos</h3>
        <p>
          En Premiére Estilistas creemos que un corte de caballero/señora es
          mucho más que una forma: es una declaración, un instante de renovación
          y una manera de reconectar contigo. Por eso, cada corte, ya sea
          clásico o moderno, nace de una escucha atenta, de comprender quién
          eres y cómo quieres sentirte.
        </p>
      </section>

      {/* ---------- GRID SERVICIOS ---------- */}
      <section className="services-grid">
        <div className="service-card fade-in" style={{ transitionDelay: "0s" }}>
          <img src={colorImg} alt="Coloración" />
          <h3>Coloración</h3>
          <p>
            El color no es solo una técnica, es una forma de expresión.
            Trabajamos con tonos que hablan de ti, que iluminan tu rostro y
            acompañan tu personalidad, desde matices sutiles hasta
            transformaciones más atrevidas. Cada coloración se realiza con
            precisión, sensibilidad y productos que respetan la salud del
            cabello y el medio ambiente.
          </p>
        </div>

        <div
          className="service-card fade-in"
          style={{ transitionDelay: "0.2s" }}
        >
          <img src={tratamientoImg} alt="Tratamientos capilares" />
          <h3>Tratamientos</h3>
          <p>
            La belleza empieza por el cuidado. Entendemos que el cabello no solo
            necesita belleza, sino también cuidado profundo. Cada hebra guarda
            señales de tu ritmo, de tus días y de tus cambios... Por eso, los
            tratamientos de hidratación que utilizamos son de alta calidad y
            penetran en la fibra capilar, reestructurando su elasticidad, su
            brillo y su movimiento natural. Trabajamos con productos de primeras
            marcas, seleccionados por su calidad y sus resultados profesionales.
            Calidad que se nota, resultados que duran.
          </p>
        </div>

        <div
          className="service-card fade-in"
          style={{ transitionDelay: "0.4s" }}
        >
          <img src={alisadoImg} alt="Alisados" />
          <h3>Alisados</h3>
          <p>
            Suavidad, brillo y control en cada hebra. Nuestros alisados
            transforman tu melena, dejándola sedosa, luminosa y libre de frizz.
            Trabajamos con productos de alta calidad que respetan y protegen la
            fibra capilar, logrando un acabado liso natural, saludable y
            duradero. Analizamos tu tipo de cabello para recomendarte el
            tratamiento ideal y garantizar resultados visibles desde el primer
            día.
          </p>
        </div>

        <div
          className="service-card fade-in"
          style={{ transitionDelay: "0.6s" }}
        >
          <img src={peinadoImg} alt="Peinados" />
          <h3>Peinados</h3>
          <p>
            Tu momento especial empieza con el peinado perfecto. Ofrecemos una
            amplia gama de peinados diseñados para realzar tu belleza natural y
            adaptarse a cada ocasión. Ya sea que busques un estilo elegante para
            una boda, un look relajado para una fiesta o un peinado moderno y
            práctico para el día a día, nuestros estilistas están al día y
            preparados para crear el look perfecto según tu tipo de cabello,
            estilo personal y el evento. Desde recogidos sofisticados hasta
            ondas suaves y trenzas elegantes, utilizamos los mejores productos
            para asegurar que tu peinado dure todo el día o toda la noche.
          </p>
        </div>
      </section>
      <p className="services-ending">
        Además, muchos de nuestros servicios pueden completarse con maquillaje y
        tratamientos de estética, pensados para realzar tu imagen y hacer que te
        sientas bien en cada detalle.
      </p>
    </div>
  );
}
