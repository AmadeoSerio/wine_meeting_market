import { useProductos } from "../../hooks/useProductos";
import DestacadosItems from "../DestacadosItems/DestacadosItems";
import './Destacados.css'



const Destacados = () => {
    const destacados = [
        true
    ]

    const productos = useProductos();

    const productosDestacados = productos.filter(producto =>
    destacados.includes(producto.destacados));

    return (
        <>
            <div className="div-titulo-destacados">
            <h2 className="titulo-destacados">Productos destacados</h2>
            </div>
            <DestacadosItems productos={productosDestacados} />
        </>
    )
}

export default Destacados
