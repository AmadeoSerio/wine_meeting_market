import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart.jsx';
import Nosotras from './components/Nosotras/Nosotras.jsx';
import Checkout from './components/Checkout/Checkout.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />

            <Route path='/bodegas' element={<ItemListContainer />} />
            <Route path='/:idCategoria' element={<ItemListContainer />} />
            <Route path='/nosotras' element={<Nosotras />} />

            <Route path='/carrito' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />

          </Routes>

        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
