import { useContext } from 'react';
import { CarritoContext } from '../../context/context';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const scrollToTop = () =>{ 
  window.scrollTo({ 
    top: 0,  
    behavior: 'auto'
    /* you can also use 'auto' behaviour 
       in place of 'smooth' */
  }); 
}; 

const CartWidget = () => {
  const { total } = useContext(CarritoContext);

  return (
    <div className='carrito-logo'>
    <Link to="/carrito" onClick={scrollToTop}>
      <i className="fa-solid fa-cart-shopping cart"></i>
      {
        total > 0 && <p className='cartCounter'> {total} </p>
      }
    </Link>
    </div>
  )
}

export default CartWidget