import Item from "../Item/Item"
import { useState } from "react";


const DestacadosItems = ({ productos }) => {


  const [visible, setVisible] = useState(5);
  return (
    <>
      <div className="vidriera">
        {/* {productos.map (item => <Item key={item.id} {...item}/>)} */}
        {productos.slice(0, visible).map(item => <Item key={item.id} {...item} />)}
      </div>
    </>
  )
}

export default DestacadosItems