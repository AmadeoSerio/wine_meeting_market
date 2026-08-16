import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


import './NavBar.css'

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);


  const handleClose = () => {

    setShow(false);

    setShowDropdown(false);

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

  };

  const handleShow = () => setShow(true);

  return (
    <>

      <Navbar expand="lg" fixed="top">
        <Container fluid className='div-contenedor-nav'>

          {/* IZQUIERDA */}
          <div className="nav-left">
            <Navbar.Brand>
              <Link to="/" onClick={handleClose}>
                <img
                  src="/img/brand_wine_meeting_ok.png"
                  alt="wine meeting marca"
                  className="imgBrand"
                />
              </Link>
            </Navbar.Brand>
          </div>


          {/* CENTRO */}

          <div className="nav-center">

            <Nav className="menu-desktop">

              <NavLink
                to="/"
                className="texto-navbar"
                onClick={handleClose}
              >
                <p className='p-navBar p-filtrado'>Inicio</p>
              </NavLink>

              <NavLink
                to="/nosotras"
                className="texto-navbar"
                onClick={handleClose}
              >
                <p className='p-navBar p-filtrado'>Nosotras</p>
              </NavLink>

              <NavDropdown
                show={showDropdown}
                onToggle={(nextShow) => setShowDropdown(nextShow)}
                className='p-navBar'
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

              <NavLink
                to="/buscador"
                className="texto-navbar"
                onClick={handleClose}
              >
                <p className='p-navBar p-filtrado p-buscar'>Buscar <i className="fa-solid fa-magnifying-glass lupa-navbar"></i></p>
              </NavLink>

              <NavLink
                to="/degustaciones"
                className="texto-navbar p-degustacion"
                onClick={handleClose}
              >
                <p className='p-navBar p-filtrado'>Degustaciones</p>
              </NavLink>

            </Nav>

          </div>


          {/* DERECHA */}
          <div className="nav-right">

            <CartWidget />

            <Navbar.Toggle
              onClick={handleShow}
              className='tres-rayas'
            />
          </div>



          <Offcanvas
            placement="end" className='navbar-fondo'
            show={show}
            onHide={handleClose}>

            <Offcanvas.Header closeButton>

              <div className="logo-offcanvas">
                <img src="/img/brand_wine_meeting_footer.png" alt="Wine Meeting" />
              </div>

            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <p className="titulo-menu">NAVEGACIÓN</p>
                <NavLink
                  to="/"
                  className="texto-navbar"
                  onClick={handleClose}
                >
                  <div className="item-menu">
                    <i className="fa-solid fa-house"></i>
                    <p className="p-off">Inicio</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/buscador"
                  className="texto-navbar"
                  onClick={handleClose}
                >
                  <div className="item-menu">
                    <i className="fa-solid fa-magnifying-glass lupa-navbar-off"></i>
                    <p className="p-off">Buscar</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/nosotras"
                  className="texto-navbar"
                  onClick={handleClose}
                >
                  <div className="item-menu">
                    <i className="fa-solid fa-heart"></i>
                    <p className="p-off">Nosotras</p>
                  </div>
                </NavLink>


                <hr className="linea-menu" />


                <NavDropdown
                  className='p-navBar p-off'
                  title={
                    <div className="item-menu-dropdown">
                      <i className="fa-solid fa-store"></i>
                      <span>Tienda</span>
                    </div>
                  }
                  id="menu-desktop-dropdown"
                >

                  <NavLink to="/SectorTodos/tintos" className="texto-navbar" onClick={handleClose}>
                    <p className='p-navBar p-off container'>Tintos</p>
                  </NavLink>

                  <NavLink to="/SectorTodos/blancos" className="texto-navbar" onClick={handleClose}>
                    <p className='p-navBar p-off container'>Blancos</p>
                  </NavLink>

                  <NavLink to="/SectorTodos/rosados" className="texto-navbar" onClick={handleClose}>
                    <p className='p-navBar p-off container'>Rosados</p>
                  </NavLink>

                  <NavLink to="/SectorTodos/espumantes" className="texto-navbar" onClick={handleClose}>
                    <p className='p-navBar p-off container'>Espumantes</p>
                  </NavLink>

                  <NavDropdown.Divider />

                  <NavLink to="/SectorTodos/destilados" className="texto-navbar" onClick={handleClose}>
                    <p className='p-navBar p-off container'>Destilados</p>
                  </NavLink>


                  <NavDropdown.Divider />
                  <NavLink to="/SectorTodos/accesorios" className="texto-navbar" onClick={handleClose}>
                    <p className='p-navBar p-off container'>Accesorios</p>
                  </NavLink>


                </NavDropdown>


                <hr className="linea-menu" />


                <NavLink
                  to="/degustaciones"
                  className="texto-navbar"
                  onClick={handleClose}
                >
                  <div className="item-menu">
                    <i className="fa-solid fa-wine-glass"></i>
                    <p className="p-off">Degustaciones</p>
                  </div>
                </NavLink>


                <div className="redes-offcanvas">
                  <a
                    href="https://www.instagram.com/wine.meeting_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5492612051027"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>


              </Nav>




            </Offcanvas.Body>



          </Offcanvas>









        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;