import './itemListContainer.css'
import { useState, useEffect} from 'react'
import ItemList from './itemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../data/db.js'

const itemListContainer = () => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const productRef = collection(db, "products")

    const getProducts = async() => {
        try{
            let dataDb;
            if (category) {
                console.log(category.toUpperCase().charAt(0) + category.slice(1))
                const q = query(productRef, where("categories.category", "==", category.toUpperCase().charAt(0) + category.slice(1)))
                dataDb = await getDocs(q)
            } else {
                dataDb = await getDocs(productRef)
            }
            
            const data = dataDb.docs.map( (productDb) =>{
                return {id: productDb.id, ...productDb.data()}
            }   
            )
            setProducts(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => { getProducts() }, [ category ] )
    
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