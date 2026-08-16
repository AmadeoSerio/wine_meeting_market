import './Footer.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { db } from "../../services/config";
import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";

const Footer = () => {

  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const toTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  const handleClose = () => {
    setShow(false)
  }

  const suscribirse = async (e) => {

    e.preventDefault();
    setCargando(true);
    try {
      const consulta = query(
        collection(db, "suscriptores"),
        where("email", "==", email)
      );

      const existe = await getDocs(consulta);
      if (!existe.empty) {
        setMensaje("Ese correo ya está suscripto.");
        setCargando(false);
        return;
      }

      await addDoc(collection(db, "suscriptores"), {
        email,
        fecha: Timestamp.now()
      });
      setMensaje("¡Gracias por suscribirte!");
      setEmail("");
    }

    catch (error) {
      console.log(error);
      setMensaje("Ocurrió un error.");
    }
    setCargando(false);
  }

  return (
    <section className='footer'>
      <section className='section-footer'>
        <div className='div1'>
          <Link to="/" onClick={toTop}>
            <img
              src="/img/brand_wine_meeting_footer.png"
              alt="wine meeting marca"
              className="img-footer"
            />
          </Link>

          <p className='p-div1'>Dos pasiones que se encuentran <br /> para acompañarte en cada <br /> momento especial.</p>

          <div className='contenedor-iconos'>
            <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/wine.meeting_/"><i className="fa-brands fa-instagram"></i></a>

            <a target='_blank' rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=5492612051027&text&type=phone_number&app_absent=0"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>


        <div className='div2'>

          <h5 className='h5-div2'>NAVEGACIÓN</h5>

          <Link to="/" onClick={toTop} className='links-div2'>Inicio</Link>

          <Link to="/nosotras" className='links-div2'>Nosotras</Link>

          <NavDropdown
            className='links-div2'
            title="Tienda"
            id="menu-desktop-dropdown"
          >

            <NavLink to="/SectorTodos/tintos" className="texto-navbar" onClick={handleClose}>
              <p className='p-navBar p-color-nav container'>Tintos</p>
            </NavLink>

            <NavLink to="/SectorTodos/blancos" className="texto-navbar" onClick={handleClose}>
              <p className='p-navBar p-color-nav container'>Blancos</p>
            </NavLink>

            <NavLink to="/SectorTodos/rosados" className="texto-navbar" onClick={handleClose}>
              <p className='p-navBar p-color-nav container'>Rosados</p>
            </NavLink>

            <NavLink to="/SectorTodos/espumantes" className="texto-navbar" onClick={handleClose}>
              <p className='p-navBar p-color-nav container'>Espumantes</p>
            </NavLink>

            <NavLink to="/SectorTodos/destilados" className="texto-navbar" onClick={handleClose}>
              <p className='p-navBar p-color-nav container'>Destilados</p>
            </NavLink>

            <NavLink to="/SectorTodos/accesorios" className="texto-navbar" onClick={handleClose}>
              <p className='p-navBar p-color-nav container'>Accesorios</p>
            </NavLink>

          </NavDropdown>

          <Link to="/degustaciones" className='links-div2'>Degustaciones</Link>
        </div>

        <div className='div3'>
          <h5 className='h5-div3'>SUSCRIBITE</h5>
          <p className='p-div1'>Recibí novedades, lanzamientos y promociones exclusivas.</p>

          <form className='form-footer' onSubmit={suscribirse} >

            <input className='input-mail'
              type="email" id="correo"
              name="email"
              placeholder="Tu email"
              required value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
            <input className='input-boton'
              type="submit"
              value={cargando ? "Enviando..." : "SUSCRIBIRME"}
              disabled={cargando}></input>
          </form>
          {
            mensaje &&
            <p className="mensaje-footer">
              {mensaje}
            </p>
          }
        </div>
      </section>
    </section>
  )
}

export default Footer