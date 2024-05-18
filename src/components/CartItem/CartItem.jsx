import { useContext } from "react"
import { CarritoContext } from "../../context/context"
import Swal from "sweetalert2"
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

    const alertaEliminarProducto = () => {
      (Swal.fire({
          title: '¿Desea eliminar el producto?',
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
          eliminarProducto(item.id)
      }));
  };

  return (
    <>
    <div className="cart-item">
      <div className="info-cart">
        <h4>{item.nombre}</h4>
        <p>Varietal: {item.varietal}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
      </div>
        <button onClick={()=>alertaEliminarProducto()} className="boton-eliminar"><i className="fa-solid fa-trash"></i></button>
    </div>
    <hr />
    </>
  )
}

export default CartItem