import { useContext } from "react"
import { CarritoContext } from "../../context/context"
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <>
    <div className="cart-item">
      <div className="info-cart">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
      </div>
        <button onClick={()=>eliminarProducto(item.id)} className="boton-eliminar"><i className="fa-solid fa-trash"></i></button>
    </div>
    <hr />
    </>
  )
}

export default CartItem