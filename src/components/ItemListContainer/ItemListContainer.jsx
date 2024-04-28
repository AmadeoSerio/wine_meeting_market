import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import CarruselWelcome from "../CarruselWelcome/CarruselWelcome";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDocs, collection, query, where } from "firebase/firestore";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where
        ("categoria", "==", idCategoria)) : collection(db, "inventario");

        getDocs(misProductos)
        .then(res => {
            const nuevosProductos = res.docs.map (doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error));

    }, [idCategoria])

    return (
        <>
            <CarruselWelcome />
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer