import { Link } from 'react-router-dom';
import './CarruselWelcome.css';

function CarruselWelcome() {
  return (
    <section className="hero-home">

      {/* WINE MEETING */}
      <div className="hero-wine">

        <img
          className="hero-background"
          src="/img/vinos_hero.png"
          alt=""
        />

        <div className="hero-content hero-content-wine">

          <div className="hero-text">
            <h2 className="hero-title">
              Wine <br /> Meeting
            </h2>

            <p className="hero-description hero-description-wine">
              Vinos, Destilados y Accesorios para brindar grandes encuentros.
            </p>

            <Link to="/SectorWineMeeting">
              <button className="hero-btn">
                Ver colección
              </button>
            </Link>
          </div>

        </div>

      </div>


      {/* AROMAS DE ENCUENTROS */}
      <div className="hero-aromas">

        <img
          className="hero-background"
          src="/img/aromas_hero.png"
          alt=""
        />

        <div className="hero-content">

          <div className="hero-text">

            <h2 className="hero-title aromas-title">
              Aromas <br /> de Encuentros
            </h2>

            <p className="hero-description hero-description-aromas">
              Yerbas Orgánicas, Té en Hebras y Accesorios
            </p>

            <Link to="/SectorAromas">
              <button className="hero-btn-aromas">
                Ver colección
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CarruselWelcome;