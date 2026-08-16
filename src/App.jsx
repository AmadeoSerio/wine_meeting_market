import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context.jsx';
import { ProductosProvider } from "./context/productosContext";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import Cart from './components/Cart/Cart.jsx';
import Nosotras from './components/Nosotras/Nosotras.jsx';
import Degustaciones from './components/Degustaciones/Degustaciones.jsx';
import SectorTodos from './components/SectorTodos/SectorTodos.jsx';
import SectorWineMeeting from './components/SectorWineMeeting/SectorWineMeeting.jsx';
import SectorAromas from './components/SectorAromas/SectorAromas.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Footer from './components/Footer/Footer.jsx';
import BarraBuscador from './components/BarraBuscador/BarraBuscador.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <ProductosProvider>

            <NavBar />

            <Routes>
              <Route path='/' element={<ItemListContainer />} />

              <Route path='/nosotras' element={<Nosotras />} />
              <Route path='/degustaciones' element={<Degustaciones />} />


              <Route path='/SectorTodos' element={<SectorTodos />} />
              <Route path='/SectorTodos/:idCategoria' element={<SectorTodos />} />
              <Route path='/buscador' element={<BarraBuscador />} />



              <Route path='/SectorWineMeeting' element={<SectorWineMeeting />} />
              <Route path="/SectorWineMeeting/:idCategoria" element={<SectorWineMeeting />} />

              <Route path='/SectorAromas' element={<SectorAromas />} />
              <Route path="/SectorAromas/:idCategoria" element={<SectorAromas />} />

              <Route path='/carrito' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>

            <Footer />

          </ProductosProvider>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
