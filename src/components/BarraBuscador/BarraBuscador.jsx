import { useState } from "react";
import { useProductos } from "../../hooks/useProductos";
import Item from "../Item/Item"
import './BarraBuscador.css'


const BarraBuscador = ({ placeholder }) => {

    const productos = useProductos();

    const [filteredData, setFilteredData] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const hayBusqueda = wordEntered.trim() !== "";

    const preventor = (e) => {
        e.preventDefault();
    }

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = productos.filter((value) => {
            return (
                value.nombre &&
                value.nombre.toLowerCase().includes(searchWord.toLowerCase())
            );
        });
        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    };


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };


    return (
        <>
            <div className="div-titulo-buscador">
                {/* <img className="img-buscador-izq" src="/img/buscador_izq.png" alt="" />
                <img className="img-buscador-der" src="/img/buscador_der.png" alt="" /> */}
                <h3 className="titulo-buscador">Buscar por nombre</h3>
                <p className="parrafo-buscador">Encontrá tu producto favorito por su nombre</p>

                <div className="inputs container">
                    <form className="formulario-buscador">
                        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />

                        {
                            wordEntered.length === 0 ? <i className="fa-solid fa-xmark sin-color" onClick={clearInput}></i> : <i className="fa-solid fa-xmark" onClick={clearInput}></i>
                        }

                        <i className="fa-solid fa-magnifying-glass" onClick={preventor}></i>
                    </form>
                </div>
            </div>

            <div className="div-buscador">

                {wordEntered === "" && (
                    <div className="div-vacio">

                    </div>
                )}

                {hayBusqueda && filteredData.length > 0 && (
                    <>
                        <p className="titulo-resultados container">
                            Resultados de la búsqueda:
                        </p>

                        <div className="resultados">
                            {filteredData.slice(0, 6).map(item => (
                                <Item key={item.id} {...item} />
                            ))}
                        </div>

                        <p className="fin-resultados">
                            No hay más resultados encontrados
                        </p>
                    </>
                )}

                {hayBusqueda && filteredData.length === 0 && (
                    <div className="no-hay-prod container">
                        <p>No encontramos productos con ese nombre.</p>
                    </div>
                )}

            </div>
        </>
    )
}

export default BarraBuscador
