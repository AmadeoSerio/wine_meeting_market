import { useContext } from "react";
import { CarritoContext } from "../../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Swal from "sweetalert2";
import "./Cart.css";

const Cart = () => {

    const {
        carrito,
        vaciarCarrito,
        total,
        cantidadTotal,
    } = useContext(CarritoContext);

    const alertaVaciarCarrito = () => {

        Swal.fire({

            title: "¿Vaciar el carrito?",

            text: "Se eliminarán todos los productos.",

            showCancelButton: true,

            confirmButtonText: "Sí, vaciar",

            cancelButtonText: "Cancelar",

            allowOutsideClick: true,

            buttonsStyling: false,

            customClass: {
                popup: "wm-alert",
                title: "wm-alert-title",
                htmlContainer: "wm-alert-text",
                confirmButton: "wm-btn-confirm",
                cancelButton: "wm-btn-cancel"
            }

        }).then((result) => {

            if (result.isConfirmed) {

                vaciarCarrito();

            }

        });

    };

    /* =====================================
       CARRITO VACÍO
    ===================================== */

    if (cantidadTotal === 0) {

        return (

            <section className="carrito-vacio-section">

                <div className="carrito-vacio-container">

                    <img
                        className="carrito-vacio-img"
                        src="./img/carrito-vacio.png"
                        alt="Carrito vacío"
                    />

                    <span className="carrito-subtitulo">
                        TU CARRITO
                    </span>

                    <h2 className="carrito-vacio-titulo">
                        Tu carrito está vacío
                    </h2>

                    <p className="carrito-vacio-texto">
                        Todavía no agregaste productos.
                        Explorá nuestro catálogo y encontrá
                        tu próxima experiencia.
                    </p>

                    <Link
                        to="/"
                        className="carrito-boton-principal"
                    >
                        Explorar productos
                    </Link>

                </div>

            </section>

        );

    }

    /* =====================================
       CARRITO
    ===================================== */

    return (

        <section className="cart-page">

            <div className="cart-page-container">

                {/* ============================
                    LISTA
                ============================ */}

                <div className="cart-listado">

                    <span className="cart-subtitulo">
                        TU PEDIDO
                    </span>

                    <h2 className="cart-titulo">
                        Artículos del carrito
                    </h2>

                    <p className="cart-descripcion">
                        Revisá los productos antes de confirmar
                        tu compra.
                    </p>

                    <div className="cart-items">

                        {

                            carrito.map(producto => (

                                <CartItem
                                    key={producto.item.id}
                                    {...producto}
                                />

                            ))

                        }

                    </div>

                </div>

                {/* ============================
                    RESUMEN
                ============================ */}

                <aside className="cart-resumen">

                    <h3>
                        Resumen del pedido
                    </h3>

                    <hr />

                    <div className="cart-totales">

                        <div>

                            <span>Total</span>

                            <strong>

                                ${cantidadTotal}

                            </strong>

                        </div>

                        <div>

                            <span>Productos</span>

                            <strong>

                                {total}

                            </strong>

                        </div>

                    </div>

                    <div className="cart-botones">

                        <Link
                            to="/checkout"
                            className="cart-boton-principal"
                        >
                            Finalizar pedido
                        </Link>

                        <button
                            className="cart-boton-secundario"
                            onClick={alertaVaciarCarrito}
                        >
                            Vaciar carrito
                        </button>

                    </div>

                </aside>

            </div>

        </section>

    );

};

export default Cart;