import "./About.css";
// import vanesa from "../assets/vanesa.jpg";
import vanesa from "../assets/vane.png";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-image">
          {<img src={vanesa} alt="Vanesa Alba - Premiére Estilistas" />}
        </div>

        <div className="about-content">
          <h1>PREMIÈRE ESTILISTAS</h1>

          <p>
            Con más de veinte años de experiencia, Vanesa Alba lidera Premiére
            Estilistas con la seguridad de quien domina su oficio y la calidez
            de quien sabe escuchar. Su visión, unida a un equipo comprometido y
            altamente cualificado, ha convertido el salón en un referente donde
            la excelencia técnica convive con un trato humano y cercano.
          </p>

          <p>
            En Premiére Estilistas, cada cliente es atendido con dedicación,
            respeto y una atención personalizada que refleja la filosofía de
            Vanesa:
          </p>

          <p className="about-quote">
            Profesionalidad sin perder la cercanía, calidad sin perder la
            esencia.
          </p>

          <p>
            En Premiére Estilistas, la experiencia y el talento se unen para
            ponerte siempre en primer lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
