import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import CarruselWelcome from "../CarruselWelcome/CarruselWelcome";
import BarraBuscador from "../BarraBuscador/BarraBuscador";
import Swal from 'sweetalert2'
import BotonUp from "../BotonUp/BotonUp";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    const { idCategoria } = useParams();

    const alertaError = () => {
        (Swal.fire({
            title: 'Error al conectar con el servidor',
            html: `` + error,
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#721414",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };

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
        .catch(error => setError(alertaError(error)));

    }, [idCategoria])

    return (
        <>
            <CarruselWelcome />
            <BarraBuscador data={productos} placeholder="Buscar por nombre"/>
            <ItemList productos={productos} />
            <BotonUp/>
        </>
    )
}

export default ItemListContainer