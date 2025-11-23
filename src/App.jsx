import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import Cart from './components/shoppingCart/cart';
import Checkout from './components/shoppingCart/checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/shoppingCart/cartContex';

function App() {
  return (
    <div className='totalApp'>
      <BrowserRouter basename="/e-commerce">
        <CartProvider>
          <NavBar/>
          <div className='titulo'><h1>Fermenta</h1></div>

          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="category/:category" element={<ItemListContainer/>} />
            <Route path="product/:id" element={<ItemDetailContainer/>} />
            <Route path="*" element={<div>Error 404</div>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
