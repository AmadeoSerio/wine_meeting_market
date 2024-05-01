import { useContext } from "react";
import { CarritoContext } from "../../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carritoVacio container">
                <div>
                    <img className="carrito-vacio" src="./img/carrito-vacio.png" alt="" />
                    <h2>Carrito vacío</h2>
                </div>
                <Link to="/" className="botonVerProd"> Ver Productos </Link>
            </div>
        )
    }

  return (
    <>
    <div className="cart-div container">
        <h2 className="titulo-carrito">Artículos del carrito</h2>
        <hr />
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
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