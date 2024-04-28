import { useContext } from "react";
import { CarritoContext } from "../../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if (total === 0) {
        return (
            <>
            <h2>NO HAY PRODUCTOS</h2>
            <Link to="/">Ver productos</Link>
            </>
        )
    }

  return (
    <>
    <div className="cart-div container">
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        }
        
        <h3>Total: ${cantidadTotal}</h3>
        <h3>Cantidad de productos: {total}</h3>
        
        <div className="botones-cart">
        <Link to="/checkout" className="finalizar-pedido">Finalizar pedido</Link>
        <button onClick={()=>vaciarCarrito()}> Vaciar carrito </button>
        </div>
    </div>
    </>
  )
}

export default Cart