import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/context";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfimacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext (CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if(!nombre || !telefono || !email || !emailConfirmacion) {
            setError ("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campor del email no coinciden")
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

    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
        {
            carrito.map(producto => (
                <div key={producto.item.id}>
                    <p> {producto.item.nombre} x {producto.cantidad} </p>
                    <p> {producto.item.precio} </p>
                    <hr />
                </div>
            ))
        }
        
        <div>
            <label>Nombre</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)}/>
        </div>
        
        <div>
            <label>Teléfono</label>
            <input type="text" onChange={(e) => setTelefono(e.target.value)}/>
        </div>

        <div>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
            <label>Confirmar email</label>
            <input type="email" onChange={(e) => setEmailConfimacion(e.target.value)}/>
        </div>

        {
            error && <p> {error} </p>   //////////////////////////////////
        }
        

        <button type="submit"> Confirmar Pedido </button>

        {
            orderId && (
                <strong> ¡Gracias por tu pedido! Tu número de orden es: {orderId} </strong>
            )
        }

        </form>

    </div>
  )
}

export default Checkout