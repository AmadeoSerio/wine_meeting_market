import { useContext } from "react";
import { CarritoContext } from "../../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Swal from "sweetalert2";
import './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    const alertaVaciarCarrito = () => {
        (Swal.fire({
            title: '¿Estás seguro de vaciar el carrito?',
            showCancelButton: true,
            confirmButtonText: 'Si',
            background: "#481f4f",
            color: "#eeee",
            backdrop: false,
            confirmButtonColor: "grey",
            allowOutsideClick: true,
            width: '50rem',
        }).then((result)=> {
            if (result.isConfirmed)
            vaciarCarrito()
        }));
    };

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
        
        {/* <h3>Total: ${cantidadTotal}</h3> */}
        <h3>Cantidad de productos: {total}</h3>
        
        <div className="botones-cart">
        <Link to="/checkout" className="finalizar-pedido">Finalizar pedido</Link>
        <button onClick={()=>alertaVaciarCarrito()}> Vaciar carrito </button>
        </div>
    </div>
    </>
  )
}

export default Cart