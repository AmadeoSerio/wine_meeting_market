import { useState } from "react"
import Item from "../Item/Item"

const BarraBuscador = ({placeholder, data}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.nombre.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === "") {
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
    <div className="div-buscador">
        <div className="inputs">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>

            {
                filteredData.length === 0 ? <i className="fa-solid fa-magnifying-glass"></i> : <i className="fa-solid fa-xmark" onClick={clearInput}></i>
            }
            
        </div>

{ filteredData.length != 0 && (
    <div className="resultados">
        {filteredData.slice(0, 15).map(item => <Item key={item.id} {...item} />)}
    </div>
)}
    </div>
  )
}

export default BarraBuscador
