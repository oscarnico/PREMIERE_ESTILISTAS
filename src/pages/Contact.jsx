import "./Contact.css";
import contactImage from "../assets/contacto.png"; // misma imagen para desktop y móvil

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Premiére Estilistas - contacto" />
        </div>

        <div className="contact-content">
          <h1>Contacto</h1>
          <h2>Alonso Martínez, Madrid</h2>

          <p>
            <strong>Dirección:</strong> C. del Monte Esquinza, 35, Chamberí,
            28010 Madrid
          </p>
          <p>
            <strong>Teléfono:</strong> 911 15 20 49
          </p>

          <p>
            <strong>Horario:</strong>
          </p>
          <ul>
            <li>Lunes: 10:00–19:00</li>
            <li>Martes: 10:00–19:00</li>
            <li>Miércoles: 10:00–19:00</li>
            <li>Jueves: 10:00–19:00</li>
            <li>Viernes: 10:00–19:00</li>
            <li>Sábado: 10:00–14:00</li>
            <li>Domingo y festivos: Cerrado</li>
          </ul>

          <a
            className="contact-button"
            href="mailto:premiere_estilistas@gmail.com"
          >
            Contactar por email
          </a>
        </div>
      </div>
    </section>
  );
}
