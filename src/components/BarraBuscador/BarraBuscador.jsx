import { useState } from "react"
import Item from "../Item/Item"
import './BarraBuscador.css'

const BarraBuscador = ({ placeholder, data }) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const preventor = (e) => {
        e.preventDefault();
    }

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.nombre.toLowerCase().includes(searchWord.toLowerCase());
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
    
    
    console.log(wordEntered.length);

    return (
        <div className="div-buscador">
            <div className="inputs">
                <form>
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />

                {
                    wordEntered.length == 0 ? <i className="fa-solid fa-xmark sin-color" onClick={clearInput}></i> : <i className="fa-solid fa-xmark" onClick={clearInput}></i> 
                }

                <i className="fa-solid fa-magnifying-glass" onSubmit={preventor}></i> 
                </form>
            </div>

            {
                filteredData.length > 0  &&  (
                    <p className="titulo-resultados container">Resultados de la búsqueda:</p>
                )
            }

            {
                filteredData.length > 0 ?
                    (
                    <>
                    <div className="resultados">
                        {filteredData.slice(0, 8).map(item => <Item key={item.id} {...item} />)}
                    </div>
                        <p className="fin-resultados">No hay más resultados encontrados</p>
                    </>
                    ) :
                    <div className="no-hay-prod">
                        <p>No se encuentran productos buscados</p>
                    </div>
            }

        </div>
    )
}

export default BarraBuscador
