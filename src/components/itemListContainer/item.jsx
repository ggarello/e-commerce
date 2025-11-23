import './item.css'
import { Link } from 'react-router-dom'


const Item = ( { product } ) => {

    const firstPhoto =
        Array.isArray(product.photos)
            ? (product.photos[0]?.direction || product.photos[0])
            : product.photos?.direction;

    return (
        <Link to={ '/product/' + product.id }>
            <div className='product_container' key={product.id}>
                <div className="productPhotoContainer">
                    <img
                        src={firstPhoto}
                        alt={product.name}
                        className="productPhoto"
                    />
                </div>
                <p className='product_name'>{product.name}</p>
                <p className='product_price'>{product.price}</p>
            </div>
        </Link>
    )
}

export default Item