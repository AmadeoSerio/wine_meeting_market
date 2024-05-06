import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const funcionBucador = () => {
      (val)=>{
        if (searchTerm == ""){
          return val
        } else if (val.nombre.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        }
      }
    }

const Buscador = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // const [error, setError] = useState("");
    // const [productos, setProductos] = useState([]);

    /////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////


    const manejadorBusqueda = (event) => {
        event.preventDefault();
        if (!searchTerm.length > 0) {
            (alert("Por favor completá con un nombre"));
            return;
        }

        const resultadoBusqueda = {
            
        }
        console.log("tu busqueda es: " + searchTerm);
    }

  return (
    <>
         <Form className="d-flex" onSubmit={manejadorBusqueda}>
                <Form.Control
                  type="search"
                  placeholder="Buscar por nombre..."
                  className="me-2 mt-1"
                  aria-label="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}                  
                />
                <Button variant="outline-success" className="mt-1 boton-buscar" type='onSubmit'>Buscar</Button>
        </Form>      
    </>

    
  )
}

export default Buscador