import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductos } from "../../hooks/useProductos";
import FiltroProductos from "../FiltroProductos/FiltroProductos";
import ItemList from "../ItemList/ItemList";
import Swal from 'sweetalert2'
import BotonUp from "../BotonUp/BotonUp";
import './SectorTodos.css'



const SectorTodos = () => {
    const productos = useProductos();

    const { idCategoria } = useParams();

    const [orden, setOrden] = useState("default");

    const productosFiltrados = !idCategoria
        ? productos
        : idCategoria === "accesorios"
            ? productos.filter(
                producto =>
                    producto.categoria === "accesorios_wine" ||
                    producto.categoria === "accesorios_aromas"
            )
            : productos.filter(
                producto => producto.categoria === idCategoria
            );

    const productosOrdenados = [...productosFiltrados];

    switch (orden) {

        case "nombre-az":
            productosOrdenados.sort((a, b) =>
                a.nombre.localeCompare(b.nombre)
            );
            break;

        case "nombre-za":
            productosOrdenados.sort((a, b) =>
                b.nombre.localeCompare(a.nombre)
            );
            break;

        case "precio-menor":
            productosOrdenados.sort((a, b) =>
                Number(a.precio) - Number(b.precio)
            );
            break;

        case "precio-mayor":
            productosOrdenados.sort((a, b) =>
                Number(b.precio) - Number(a.precio)
            );
            break;

        default:
            break;

    }

    // const [error, setError] = useState("");

    // const alertaError = () => {
    //     (Swal.fire({
    //         title: 'Error al conectar con el servidor',
    //         html: `` + error,
    //         showCancelButton: false,
    //         confirmButtonText: 'Entendido',
    //         background: "#721414",
    //         color: "#eeee",
    //         confirmButtonColor: "#05121b",
    //         width: '50rem',
    //     }));
    // };

    return (
        <>
            <div className="div-titulo-sector-todos">
                <h2 className="titulo-sector-todos">NUESTROS PRODUCTOS</h2>
            </div>

            <FiltroProductos
                orden={orden}
                setOrden={setOrden}
            />

            <ItemList productos={productosOrdenados} />
            <BotonUp />
        </>
    )
}

export default SectorTodos