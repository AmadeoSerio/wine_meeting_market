import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <>
    <p className="titulo-todos-prod container">Todos los productos:</p>
    <div className="vidriera">
        {productos.map(item => <Item key={item.id} {...item} />)}
    </div>
    </>
  )
}

export default ItemList