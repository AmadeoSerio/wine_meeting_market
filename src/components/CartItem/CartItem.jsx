import { useContext } from "react";
import { CarritoContext } from "../../context/context";
import Swal from "sweetalert2";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {

    const { eliminarProducto } = useContext(CarritoContext);

const alertaEliminarProducto = () => {

    Swal.fire({

        title: "¿Eliminar este producto?",

        text: "Podrás volver a agregarlo cuando quieras.",

        icon: "warning",

        showCancelButton: true,

        confirmButtonText: "Eliminar",

        cancelButtonText: "Cancelar",

        reverseButtons: true,

        background: "#ffffff",

        color: "#333",

        iconColor: "#5a0d55",

        buttonsStyling: false,

        customClass: {

            popup: "swal-popup",

            title: "swal-title",

            htmlContainer: "swal-text",

            confirmButton: "swal-btn-confirm",

            cancelButton: "swal-btn-cancel"

        }

    }).then((result) => {

        if (result.isConfirmed) {

            eliminarProducto(item.id);

        }

    });

};

    return (

        <article className="cart-item">

            <div className="cart-item-imagen">

                <img
                    src={item.img.replace("./img", "/img")}
                    alt={item.nombre}
                />

            </div>

            <div className="cart-item-info">

                <span className="cart-item-varietal">

                    {item.varietal}

                </span>

                <h4>

                    {item.nombre}

                </h4>

                <p>

                    Cantidad:
                    <strong> {cantidad}</strong>

                </p>

            </div>

            <div className="cart-item-precio">

                <strong>

                    ${item.precio}

                </strong>

            </div>

            <button

                className="cart-item-eliminar"

                onClick={alertaEliminarProducto}

            >

                <i className="fa-solid fa-trash"></i>

            </button>

        </article>

    );

};

export default CartItem;