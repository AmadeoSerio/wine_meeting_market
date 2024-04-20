import { useContext } from 'react';
import { CarritoContext } from '../../context/context';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { total } = useContext(CarritoContext);

  return (
    <>
    <Link to="/carrito">
      <i className="fa-solid fa-cart-shopping cart"></i>
      {
        total > 0 && <p className='cartCounter'> {total} </p>
      }
    </Link>
    </>
  )
}

export default CartWidget