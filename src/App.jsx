import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart.jsx';


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
            <Route path='/nosotras' element={<ItemListContainer />} />

            <Route path='/carrito' element={<Cart />} />

          </Routes>

        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
