import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import './Counter.css'

const Counter = ({inicial, funcionAgregar}) => {
    const [counter, setCounter] = useState(inicial);

    const alertaAgregarProducto = () => {
        (Swal.fire({
            title: 'Agregado al carrito',
            showCancelButton: false,
            confirmButtonText: 'OK',
            background: "#f94707",
            color: "#eeee",
            confirmButtonColor: "#ffff",
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true
        }));
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
        <Button variant="primary" onClick={()=> {funcionAgregar(counter); alertaAgregarProducto()}} className='boton-agregar'>Agregar</Button>
        <button onClick={restCounter} className="boton-cantidad"> <i className="fa-solid fa-minus"></i> </button>
        <strong className="numero-producto"> {counter} </strong>
        <button onClick={plusCounter} className="boton-cantidad"> <i className="fa-solid fa-plus"></i> </button>
    </div>
    </>
  )
}

export default Counter