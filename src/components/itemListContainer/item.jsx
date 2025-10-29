import './item.css'
import { Link } from 'react-router-dom'


const Item = ( { product } ) => {

    return (
        <Link to={ '/product/' + product.id }>
            <div className='product_container' key={product.id}>
                <p className='product_name'>{product.name}</p>
                <p className='product_price'>{product.price}</p>
            </div>
        </Link>
    )
}

export default Item