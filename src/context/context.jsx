import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});


export const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setTotal(prev => prev + cantidad);
            setCantidadTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setTotal(prev => prev + cantidad);
            setCantidadTotal(prev => prev + (item.precio * cantidad));
        }
    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
        setTotal(prev => prev - productoEliminado.cantidad);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    const sumarUno = (id) => {
        const productoSumado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev + (productoSumado.item.precio));
        setTotal(prev => prev + 1)

    }

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito, sumarUno }}>
        {children}
        </CarritoContext.Provider>
    )
}

export default CarritoContext
