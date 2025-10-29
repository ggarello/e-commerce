import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../../data/products'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProducts()
      .then((data) => {
        // Buscamos el producto por ID (asegurate que coincidan tipos)
        const found = data.find((p) => p.id === Number(id))
        setProduct(found)
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
      .finally(() => {
        console.log('importación finalizada.')
      })
  }, [id])

  // Mientras carga, podés mostrar un loading
  if (!product) {
    return <div className="loading">Cargando...</div>
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
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetailContainer
