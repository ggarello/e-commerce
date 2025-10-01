import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Contador from './components/contador/contador'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer 
        greeting={ "Bienvenidos al mejor ecommerce del mundo" }
      />
      <h1>E commerce</h1>
      <Contador />
    </div>
  )
}

export default App
