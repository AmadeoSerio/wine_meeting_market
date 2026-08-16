import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import './Counter.css'

const Counter = ({inicial, funcionAgregar}) => {
    const [counter, setCounter] = useState(inicial);

    const alertaAgregarProducto = () => {

    Swal.fire({

        icon: "success",

        title: "Producto agregado",

        text: "Se añadió correctamente al carrito.",

        toast: true,

        position: "top-end",

        showConfirmButton: false,

        timer: 2200,

        timerProgressBar: true,

        background: "#ffffff",

        color: "#3f3f3f",

        buttonsStyling: false,

        customClass: {

            popup: "swal-toast",

            title: "swal-toast-title",

            htmlContainer: "swal-toast-text"
        }
    });
};

const plusCounter = () => {
    setCounter(counter + 1)
};

const restCounter = () => {
    if(counter > inicial) {
        setCounter(counter - 1)
    }
};

  return (
    <>
    <div className="botones-item">
        <Button variant="primary" onClick={()=> {funcionAgregar(counter); alertaAgregarProducto()}} className='boton-agregar'><i className="fa-solid fa-cart-shopping cart cart-card"></i></Button>
        <button onClick={restCounter} className="boton-cantidad"> <i className="fa-solid fa-minus"></i> </button>
        <strong className="numero-producto"> {counter} </strong>
        <button onClick={plusCounter} className="boton-cantidad"> <i className="fa-solid fa-plus"></i> </button>
    </div>
    </>
  )
}

export default Counter