import { useState, useContext } from "react";
import { CarritoContext } from "../../context/context";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfimacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext (CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if(!nombre || !telefono || !email || !emailConfirmacion) {
            setError ("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
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
            "https://api.whatsapp.com/send?phone=5492612051027&text=Hola,%20soy%20*" + nombre + "*%20y%20estoy%20buscando%20los%20siguientes%20productos:%20%0A%0A*Quiero*:" + carrito.map(producto => ( "%0A" + producto.item.nombre + "%20" + producto.item.varietal + "%20x%20" + producto.cantidad)) + "%0A" + "%0A*Total*:%20" + "$" + cantidadTotal;
            
            window.open(url);
    }

  return (
    <div className="checkout-div container">
        <h2>Completa los campos</h2>

        <form onSubmit={manejadorFormulario}>
        
        <div>
            <label>Nombre</label>
            <input className="checkout-input" type="text" onChange={(e) => setNombre(e.target.value)}/>
        </div>
        
        <div>
            <label>Teléfono</label>
            <input className="checkout-input" type="text" onChange={(e) => setTelefono(e.target.value)}/>
        </div>

        <div>
            <label>Email</label>
            <input className="checkout-input" type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
            <label>Confirmar email</label>
            <input className="checkout-input ultimo-input" type="email" onChange={(e) => setEmailConfimacion(e.target.value)}/>
        </div>

        {
            error && <p> {error} </p>   //////////////////////////////////
        }
        

        <button className="checkout-boton" type="submit"> Confirmar Pedido </button>

        {
            orderId && (
                <div>
                <strong> ¡Gracias por tu pedido! Tu número de orden es: {orderId} </strong>
                </div>
            )
        }

        </form>

        <h3 className="titulo-lista">Lista de productos:</h3>
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