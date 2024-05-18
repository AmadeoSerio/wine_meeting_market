import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/context.jsx';
import './Item.css';

const scrollToTop = () =>{ 
  window.scrollTo({ 
    top: 0,  
    behavior: 'auto'
    /* you can also use 'auto' behaviour 
       in place of 'smooth' */
  }); 
}; 

const Item = ({id, nombre, bodega, precio, varietal, descripcion, img}) => {
const [agregarCantidad, setAgregarCantidad] = useState(0);
const {agregarAlCarrito} = useContext(CarritoContext);


const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);
  const item = {id, nombre, precio, varietal};
  agregarAlCarrito(item, cantidad);
}

    return (
      <Card style={{ width: '48%'}} className='d-flex card'>
        <Card.Img variant="top" src={img} className='img-vino'/>
        <Card.Body className='card-body'>
          <Card.Title className='text1'>{nombre}</Card.Title>
          <Card.Title className='text3'>${precio}</Card.Title>
          <Card.Title className='text3 varietal'>{varietal}</Card.Title>
          <Card.Title className='text4'>{bodega}</Card.Title>
          <Card.Text className='text5'>
            {descripcion}
          </Card.Text>
          {agregarCantidad > 0 ? (<Link to="/carrito" className='boton-ir-carrito' onClick={scrollToTop}>Ir al carrito</Link>): <Counter inicial={1} funcionAgregar={manejadorCantidad}/>}
        </Card.Body>
      </Card>
    )
  }

export default Item



