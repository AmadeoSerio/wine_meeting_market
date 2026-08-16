import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../context/context";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { enviarMailEmpresa, enviarMailCliente } from "../../services/emailService";
import Swal from "sweetalert2";
import "./Checkout.css";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
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

    const {
        carrito,
        vaciarCarrito,
        total,
        cantidadTotal,
        varietal,
        precio,
    } = useContext(CarritoContext);

    /* ==========================
        ALERTAS
    ========================== */

    const alertaOrden = () => {
        Swal.fire({
            icon: "success",

            title: "¡Pedido recibido!",

            html: `
            <p style="margin-bottom:.4rem;">
                Tu pedido fue generado correctamente.
            </p>

            <small style="color:#777;">
                Código de pedido:
            </small>

            <br>

            <strong style="color:#5a0d55;">
                ${orderId}
            </strong>
        `,

            confirmButtonText: "Ir al inicio",

            background: "#fff",

            color: "#444",

            confirmButtonColor: "#5a0d55",

            allowOutsideClick: false,

            width: "500px",

            buttonsStyling: false,

            customClass: {
                popup: "swal-wine",
                title: "swal-title",
                confirmButton: "swal-btn"
            }

        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/";
            }
        });
    };

    const alertaCampos = () => {
        Swal.fire({
            icon: "warning",

            title: "Completá todos los campos",

            text: "Necesitamos esa información para generar tu pedido.",

            confirmButtonText: "Entendido",

            background: "#fff",

            color: "#444",

            confirmButtonColor: "#5a0d55",

            buttonsStyling: false,

            customClass: {
                popup: "swal-wine",
                title: "swal-title",
                confirmButton: "swal-btn"
            }
        });
    };

    const alertaMail = () => {
        Swal.fire({
            icon: "warning",

            title: "Los emails no coinciden",

            text: "Revisá ambos campos e intentá nuevamente.",

            confirmButtonText: "Entendido",

            background: "#fff",

            color: "#444",

            confirmButtonColor: "#5a0d55",

            buttonsStyling: false,

            customClass: {
                popup: "swal-wine",
                title: "swal-title",
                confirmButton: "swal-btn"
            }
        });
    };

    const alertaError = () => {
        Swal.fire({
            icon: "error",

            title: "Ocurrió un error",

            text: error,

            confirmButtonText: "Entendido",

            background: "#fff",

            color: "#444",

            confirmButtonColor: "#5a0d55",

            buttonsStyling: false,


            customClass: {
                popup: "swal-wine",
                title: "swal-title",
                confirmButton: "swal-btn"
            }
        });
    };

    const alertaCargando = () => {
        Swal.fire({
            title: "Procesando tu pedido...",
            text: "Estamos preparando todo. Un momento, por favor.",
            background: "#fff",
            color: "#444",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            customClass: {
                popup: "swal-wine",
                title: "swal-title"
            },
            didOpen: () => {
                Swal.showLoading();
            }
        });
    };

    /* ==========================
        FORMULARIO
    ========================== */

    const manejadorFormulario = async (e) => {

        e.preventDefault();

        if (!nombre || !telefono || !email || !emailConfirmacion) {
            alertaCampos();
            return;
        }

        if (email !== emailConfirmacion) {
            alertaMail();
            return;
        }

        alertaCargando();

        const orden = {

            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),

            cantidadTotal,
            fecha: new Date(),

            nombre,
            telefono,
            email
        };

        try {

            const docRef = await addDoc(
                collection(db, "ordenes"),
                orden
            );

            const productosTexto = carrito.map(producto =>
                `${producto.item.nombre} × ${producto.cantidad} — $${producto.item.precio}`
            ).join("\n");

            const datosPedido = {

                order_id: docRef.id,

                nombre,
                telefono,
                email,

                cantidadTotal,

                productos: productosTexto,

            };

            await enviarMailEmpresa(datosPedido);

            await enviarMailCliente(datosPedido);

            setOrderId(docRef.id);

            vaciarCarrito();

        } catch (error) {

            console.log(error);

            setError("Se produjo un error al crear la orden");

            alertaError();

        }

        const url =
            "https://api.whatsapp.com/send?phone=5492612051027&text=Hola,%20soy%20*" +
            nombre +
            "*%20y%20estoy%20buscando%20los%20siguientes%20productos:%20%0A%0A*Quiero*:" +
            carrito.map(
                producto =>
                    "%0A" +
                    producto.item.nombre +
                    "%20" +
                    producto.item.varietal +
                    "%20x%20" +
                    producto.cantidad
            );


        Swal.close();
        window.open(url);

    };

    useEffect(() => {

        if (orderId) {
            alertaOrden();
        }

    }, [orderId]);


    return (

        <section className="checkout">

            <div className="checkout-container">

                {/* =======================
                    FORMULARIO
                ======================= */}

                <div className="checkout-formulario">

                    <span className="checkout-subtitulo">
                        FINALIZAR COMPRA
                    </span>

                    <h2 className="checkout-titulo">
                        Completá tus datos
                    </h2>

                    <p className="checkout-descripcion">
                        Una vez confirmado el pedido nos comunicaremos con vos
                        para coordinar la entrega o retiro.
                    </p>

                    <form onSubmit={manejadorFormulario}>

                        <div className="checkout-campo">

                            <label>Nombre</label>

                            <input
                                className="checkout-input"
                                type="text"
                                onChange={(e) => setNombre(e.target.value)}
                            />

                        </div>

                        <div className="checkout-campo">

                            <label>Teléfono</label>

                            <input
                                className="checkout-input"
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                onChange={(e) => setTelefono(e.target.value)}
                            />

                        </div>

                        <div className="checkout-campo">

                            <label>Email</label>

                            <input
                                className="checkout-input"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="checkout-campo">

                            <label>Confirmar email</label>

                            <input
                                className="checkout-input"
                                type="email"
                                onChange={(e) =>
                                    setEmailConfimacion(e.target.value)
                                }
                            />

                        </div>

                        <button
                            className="checkout-boton"
                            type="submit"
                        >
                            Confirmar pedido
                        </button>

                    </form>

                </div>

                {/* =======================
                    RESUMEN
                ======================= */}

                <aside className="checkout-resumen">

                    <h3>
                        Tu pedido
                    </h3>

                    {
                        carrito.map(producto => (

                            <div
                                className="checkout-item"
                                key={producto.item.id}
                            >

                                <div>

                                    <p className="checkout-item-nombre">

                                        {producto.item.varietal}

                                    </p>

                                    <p className="checkout-item-descripcion">

                                        {producto.item.nombre}

                                        {" × "}

                                        {producto.cantidad}

                                    </p>

                                </div>

                                <span className="checkout-item-precio">

                                    ${producto.item.precio}

                                </span>

                            </div>

                        ))
                    }

                    <hr />

                    <div className="checkout-totales">

                        <div>

                            <span>Total</span>

                            <strong>${cantidadTotal}</strong>

                        </div>

                        <div>

                            <span>Productos</span>

                            <strong>{total}</strong>

                        </div>

                    </div>

                </aside>

            </div>

        </section>

    );

};

export default Checkout;