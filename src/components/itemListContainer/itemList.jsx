import './itemList.css'
import  Item from './item'

const ItemList = ({ products }) => {
    return (
        <div className='itemList'>
            {
                products.map((product) => (
                    <Item product={product} key={product.id}></Item>
                ))
            }
        </div>
    )
}

export default ItemList;