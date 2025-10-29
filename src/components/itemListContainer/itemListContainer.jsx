import './itemListContainer.css'
import getProducts from '../../data/products'
import { useState, useEffect} from 'react'
import ItemList from './itemList'
import { useParams } from 'react-router-dom';

const itemListContainer = () => {

    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    

    useEffect(() => {

        setLoading(true)

        
        getProducts()
            .then((data) => {
                if (category) {
                    setProducts(data.filter((product)=> product.categories.category.toLowerCase() === category))
                } else {
                    setProducts(data)
                }
                
            }
            )
            .catch( (error) => {
                console.error('Error: ', error)
            }
            )
            .finally( () => {
                setLoading(false)
            } 
            )

    }, [ category ])
    
    return (
        <div className='products_meta_container'>
            <h2>Productos</h2>
            {
                loading ? <div className='loading'>Cargando...</div> : <ItemList products={products}/>
            }
        </div>
    )
} 

export default itemListContainer;