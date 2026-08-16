import Item from "../Item/Item"
import { useState } from "react";
import './ItemList.css'

const ItemList = ({ productos }) => {




  const [visible, setVisible] = useState(10);

  const handleLoadMore = () => {
    visible <= productos.length && setVisible(prev => prev + 10)
  }

  return (
    <>
      <div className="vidriera">
        {/* {productos.map (item => <Item key={item.id} {...item}/>)} */}
        {productos.slice(0, visible).map(item => <Item key={item.id} {...item} />)}
      </div>
      <div className="cargarMas-div">
        {
          productos.length == 0 ? <p>Cargando...</p> :
            visible >= productos.length ? <p>No hay más productos</p> : <button className="boton-cargar" onClick={handleLoadMore}>Ver más</button>
        }
      </div>
    </>
  )
}

export default ItemList