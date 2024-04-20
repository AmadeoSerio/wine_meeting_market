import { useContext } from "react";
import { CarritoContext } from "../../context/context";

import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

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
    <div>
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        }
        <h3>Total: ${cantidadTotal}</h3>
        <h3>Cantidad de productos: {total}</h3>
        <button onClick={()=>vaciarCarrito()}> Vaciar carrito </button>
        <Link to="/checkout">Finalizar pedido</Link>
    </div>
  )
}

export default Cart