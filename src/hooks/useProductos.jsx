import { useContext } from "react";
import { ProductosContext } from "../context/productosContext";

export const useProductos = () => {
    const { productos } = useContext(ProductosContext);

    return productos;
}