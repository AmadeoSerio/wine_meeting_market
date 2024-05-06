import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <div className="vidriera">
        {productos.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}

export default ItemList