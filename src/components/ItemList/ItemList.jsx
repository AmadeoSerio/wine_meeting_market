import Item from "../Item/Item"
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './ItemList.css'

const ItemList = ({ productos }) => {




  const [visible, setVisible] = useState(10);

  const handleLoadMore = () => {
    visible <= productos.length && setVisible(prev => prev + 10)
  }

  return (
    <>
<div className="contenedor-todos-prod">
<i className="fa-solid fa-arrow-left"></i>
<NavLink to="/" className="titulo-todos-prod">
<p>Todos los productos</p>
</NavLink>
<i className="fa-solid fa-arrow-right"></i>
</div>

<Carousel className="filtros-slider">
      <Carousel.Item interval={4000}>
      <div className="contenedor-filtros">
        <NavLink to="/tintos" className="flitros filtro1">
          <p className='container p-filtro'>Tintos</p>
        </NavLink>
        <NavLink to="/blancos" className="flitros filtro1">
          <p className='container p-filtro'>Blancos</p>
        </NavLink>
        <NavLink to="/rosados" className="flitros filtro1">
          <p className='container p-filtro'>Rosados</p>
        </NavLink>
        <NavLink to="/espumantes" className="flitros filtro1">
          <p className='container p-filtro'>Espumantes</p>
        </NavLink>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <div className="contenedor-filtros"> 
      <NavLink to="/destilados" className="flitros filtro2">
          <p className='container p-filtro'>Destilados</p>
        </NavLink>
        <NavLink to="/cervezas" className="flitros filtro2">
          <p className='container p-filtro'>Cervezas</p>
        </NavLink>
        <NavLink to="/accesorios" className="flitros filtro2">
          <p className='container p-filtro'>Accesorios</p>
        </NavLink>
        <NavLink to="/almacen" className="flitros filtro2">
          <p className='container p-filtro'>Almacén</p>
        </NavLink>
      </div>

      

      </Carousel.Item>
    </Carousel>



      <div className="vidriera">
        {/* {productos.map (item => <Item key={item.id} {...item}/>)} */}
      {productos.slice(0, visible).map(item => <Item key={item.id} {...item} />)}
      </div>
      <div className="cargarMas-div">
      {
      productos.length == 0 ? <p>Cargando...</p> : 
      visible >= productos.length ?  <p>No hay más productos</p> : <button className="boton-cargar" onClick={handleLoadMore}>Cargar más</button>
      }
      </div>
    </>
  )
}

export default ItemList