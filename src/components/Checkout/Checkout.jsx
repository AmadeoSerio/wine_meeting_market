import { useState, useContext } from "react";
import { CarritoContext } from "../../context/context";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
import './Checkout.css'

const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  };

const Checkout = () => {
    scrollToTop();

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfimacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    //Alertas del sweetAlert
    const alertaOrden = () => {
        (Swal.fire({
            title: '¡Gracias por su pedido! Tu número de orden es: ',
            html: '<p>' + orderId + '</p>',
            showCancelButton: false,
            confirmButtonText: 'Inicio',
            background: "#481f4f",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            allowOutsideClick: false,
            width: '50rem',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/";
            }
        }))
    };

    const alertaCampos = () => {
        (Swal.fire({
            title: 'Por favor completa todos los campos para continuar',
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#481f4f",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };

    const alertaMail = () => {
        (Swal.fire({
            title: 'Los emails ingresados no coinciden',
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#481f4f",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };

    const alertaError = () => {
        (Swal.fire({
            title: 'Los emails ingresados no coinciden',
            html: `` + error,
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#481f4f",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !telefono || !email || !emailConfirmacion) {
            setError(alertaCampos());
            return;
        }

        if (email !== emailConfirmacion) {
            setError(alertaMail())
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrderId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("error al crear la orden", error);
                setError("Se produjo un error al crear la orden")
            })

        const url =
            "https://api.whatsapp.com/send?phone=5492612051027&text=Hola,%20soy%20*" + nombre + "*%20y%20estoy%20buscando%20los%20siguientes%20productos:%20%0A%0A*Quiero*:" + carrito.map(producto => ("%0A" + producto.item.nombre + "%20" + producto.item.varietal + "%20x%20" + producto.cantidad)) + "%0A" + "%0A*Total*:%20" + "$" + cantidadTotal;
             window.open(url);
        }

    return (
        <div className="checkout-div container">
            <h2>Completa los campos</h2>

            <form onSubmit={manejadorFormulario}>

                <div>
                    <label>Nombre</label>
                    <input className="checkout-input" type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label>Teléfono</label>
                    <input className="checkout-input" type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label>Email</label>
                    <input className="checkout-input" type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Confirmar email</label>
                    <input className="checkout-input ultimo-input" type="email" onChange={(e) => setEmailConfimacion(e.target.value)} />
                </div>

                {
                    error && (alertaError())
                }


                <button className="checkout-boton" type="submit"> Confirmar Pedido </button>

                {
                    orderId && (alertaOrden())
                }

            </form>

            <h3 className="titulo-lista">Revisa tu lista de productos:</h3>
            {
                carrito.map(producto => (

                    <div className="div-lista" key={producto.item.id}>
                        <p className="checkout-nombre"> {producto.item.nombre} x {producto.cantidad} </p>
                        <p className="checkout-precio"> ${producto.item.precio} </p>
                        <hr />
                    </div>
                ))
            }
            <p>Total: ${cantidadTotal}</p>
        </div>
    )
}

export default Checkout