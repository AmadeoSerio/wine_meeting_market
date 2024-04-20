import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
                  <img src="../public/img/brand_wine_meeting_ok.png" alt="wine meeting marca" className="imgBrand" />
                </Link>
              </Navbar.Brand>

              <div>
                <CartWidget />
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='tres-rayas' data-bs-theme="dark" />
              </div>
            </div>

            <div className='buscador'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar por nombre..."
                  className="me-2 mt-1"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="mt-1 boton-buscar">Buscar</Button>
              </Form>
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Wine Meeting</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="texto-navbar">
                  <p>Inicio</p>
                  </NavLink>

                  <NavDropdown
                    title="Filtrar por"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >

                  <NavLink to="/bodegas" className="texto-navbar">
                    <p>Bodegas</p>
                  </NavLink>

                  <NavLink to="/tintos" className="texto-navbar">
                    <p>Tintos</p>
                  </NavLink>

                  <NavLink to="/blancos" className="texto-navbar">
                    <p>Blancos</p>
                  </NavLink>

                  <NavLink to="/espumantes" className="texto-navbar">
                    <p>Espumantes</p>
                  </NavLink>

                  <NavLink to="/destilados" className="texto-navbar">
                    <p>Destilados</p>
                  </NavLink>

                    <NavDropdown.Divider />
                  <NavLink to="/accesorios" className="texto-navbar">
                    <p>Accesorios</p>
                  </NavLink>

                  <NavLink to="/almacen" className="texto-navbar">
                    <p>Almacén</p>
                  </NavLink>
                  </NavDropdown>

                  <NavLink to="/nosotras" className="texto-navbar">
                  <p>Nosotras</p>
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