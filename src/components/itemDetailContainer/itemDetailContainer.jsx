import './itemDetailContainer.css'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../shoppingCart/cartContex'
import { doc, getDoc} from 'firebase/firestore';
import db from '../../data/db.js'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [ cantProducto, setCantProducto ] = useState(1)
  const { cart, addProduct } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  const getProduct = async() => {
        try{
            console.log(id)
            let dataDb;
            const productRef = doc(db, "products", id)
            dataDb = await getDoc(productRef)
            const data = {id: dataDb.id, ...dataDb.data()}
            setProduct(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

  useEffect( () => { getProduct() }, [ id ] )

  // Mientras carga, podés mostrar un loading
  if (!product) {
    return <div className="loading">Cargando...</div>
  }

  const aumentarCant = () => {
    setCantProducto( cantProducto + 1 );
  }

  const reducirCant = () => {
    if (cantProducto > 1){
      setCantProducto( cantProducto - 1 ) ;
    }
  }

  return (
    <div className="itemDetailContainer">
        
        <div className='infoContainer'>
            <div className="itemDetailText">
                <h1 className="itemName">{product.name}</h1>
                <p className="price">${product.price}</p>
                <p className="productDescription">
                {product.description || "Insumo premium para elaboración artesanal. Ideal para lograr equilibrio y carácter en tus recetas."}
                </p>
            </div>

            <div className="photosContainer">
                {
                Array.isArray(product.photos) ? (
                    product.photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.direction ? photo.direction : photo} // soporta ambos formatos
                        alt={product.name}
                        className="productPhoto"
                    />
                    ))
                ) : (
                    <img
                    src={product.photos.direction}
                    alt={product.name}
                    className="productPhoto"
                    />
                )
                }
            </div>
        </div>
        <div className='buttonContainer'>
            <div className='cantidad_a_agregar'>
              <button className='button_decrease_cant' onClick={reducirCant}>-</button>
              <p className='cant_input'> {cantProducto} </p>
              <button className='button_increase_cant'  onClick={aumentarCant}>+</button>
            </div>
            <button className='button_add_to_cart' onClick={ () => addProduct(product.id, cantProducto)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetailContainer
