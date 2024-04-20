import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import CarruselWelcome from "../CarruselWelcome/CarruselWelcome";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <CarruselWelcome/>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer