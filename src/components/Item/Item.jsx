import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/context.jsx';
import './Item.css';

const Item = ({id, nombre, precio, img}) => {
const [agregarCantidad, setAgregarCantidad] = useState(0);
const {agregarAlCarrito} = useContext(CarritoContext);


const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);
  const item = {id, nombre, precio};
  agregarAlCarrito(item, cantidad);
}

    return (
      <Card style={{ width: '45%'}} className='d-flex card'>
       
        <Card.Img variant="top" src={img} className='img-vino'/>
        <Card.Body className='card-body'>
          <Card.Title className='text1'>{nombre}</Card.Title>
          <Card.Title className='text2'>Tinto</Card.Title>
          <Card.Title className='text3'>${precio}</Card.Title>


          <Card.Text className='text4'>
            Some quick {precio}example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

         
          {agregarCantidad > 0 ? (<Link to="/carrito" className='boton-ir-carrito'>Ir al carrito</Link>): <Counter inicial={1} funcionAgregar={manejadorCantidad}/>}
          
        </Card.Body>
      </Card>
    )
  }

export default Item



