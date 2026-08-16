import { createContext, useState, useEffect } from "react";
import { db } from "../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";


export const ProductosContext = createContext();


export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {

    const inventario = query(
        collection(db, "inventario"),
        where("z_mostrar", "==", true)
    );

    getDocs(inventario)
        .then((res) => {

            const lista = res.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setProductos(lista);

        });

}, []);

    return (
        <ProductosContext.Provider value={{productos}}>

        {children}
            
        </ProductosContext.Provider>
    )
}