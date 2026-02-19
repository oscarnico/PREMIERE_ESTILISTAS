import { useState, useEffect } from "react";
import "./Appointment.css";
import deskImage from "../assets/tocadores-desk.jpeg";
import mobileImage from "../assets/tocadores-movil.jpeg";

export default function Appointment() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="appointment-page">
      <div className="appointment-container">
        <div className="appointment-image">
          <img
            src={isMobile ? mobileImage : deskImage}
            alt="Premiére Estilistas - Salón"
          />
        </div>

        <div className="appointment-content">
          <h1>Reserva tu cita</h1>
          <p>
            Para ofrecerte la mejor experiencia y atención personalizada, todas
            nuestras reservas se gestionan a través de{" "}
            <strong>Treatwell</strong>. Así garantizamos que tu cita sea rápida,
            segura y fácil de organizar.
          </p>
          <p>
            Simplemente haz clic en el botón y elige el servicio que más te
            interese. ¡Te esperamos para cuidarte!
          </p>

          <a
            href="https://www.treatwell.es/establecimiento/premiere-estilistas/"
            target="_blank"
            rel="noopener noreferrer"
            className="treatwell-button"
          >
            Reservar en Treatwell
          </a>
        </div>
      </div>
    </section>
  );
}
