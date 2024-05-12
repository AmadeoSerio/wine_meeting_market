import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

import './NavBar.css'

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" fixed="top">
          <Container fluid>
            <div className='div-uno d-flex justify-content-between align-items-center'>

              <Navbar.Brand>
                <Link to="/">
                  <img src="./img/brand_wine_meeting_ok.png" alt="wine meeting marca" className="imgBrand" />
                </Link>
              </Navbar.Brand>

              <div>
                <CartWidget />
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='tres-rayas' data-bs-theme="dark" />
              </div>
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" className='navbar-fondo'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='p-navBar'>Wine Meeting</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="texto-navbar inicio">
                    <p className='p-navBar'>Inicio</p>
                  </NavLink>

                  <NavDropdown className='p-navBar'
                    title="Filtrar por"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >

                    {/* <NavLink to="/bodegas" className="texto-navbar">
                    <p className='p-navBar'>Bodegas</p>
                  </NavLink>

                  <NavDropdown.Divider /> */}

                    <NavLink to="/tintos" className="texto-navbar">
                      <p className='p-navBar container'>Tintos</p>
                    </NavLink>

                    <NavLink to="/blancos" className="texto-navbar">
                      <p className='p-navBar container'>Blancos</p>
                    </NavLink>

                    <NavLink to="/rosados" className="texto-navbar">
                      <p className='p-navBar container'>Rosados</p>
                    </NavLink>

                    <NavLink to="/espumantes" className="texto-navbar">
                      <p className='p-navBar container'>Espumantes</p>
                    </NavLink>

                    <NavDropdown.Divider />

                    <NavLink to="/destilados" className="texto-navbar">
                      <p className='p-navBar container'>Destilados</p>
                    </NavLink>

                    <NavLink to="/cervezas" className="texto-navbar">
                      <p className='p-navBar container'>Cervezas</p>
                    </NavLink>

                    <NavDropdown.Divider />
                    <NavLink to="/accesorios" className="texto-navbar">
                      <p className='p-navBar container'>Accesorios</p>
                    </NavLink>

                    <NavLink to="/almacen" className="texto-navbar">
                      <p className='p-navBar container'>Almacén</p>
                    </NavLink>

                  </NavDropdown>

                  <NavLink to="/nosotras" className="texto-navbar">
                    <p className='p-navBar'>Nosotras</p>
                  </NavLink>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;