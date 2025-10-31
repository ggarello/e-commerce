import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='totalApp'>
      <p>DISCLAIMER: Las imagenes vienen en la próxima entrega.</p>

      <BrowserRouter basename="/e-commerce">
        <NavBar/>
        <div className='titulo'><h1>Fermenta</h1></div>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="category/:category" element={<ItemListContainer/>} />
          <Route path="product/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
