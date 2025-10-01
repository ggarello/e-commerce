import './shoppingCart.css'
import IconShoppingCart from '../../assets/icon_shoppingCart.png'
const shoppingCart = () => {
    return(
        <div className='shoppingCart'>
            <img src={IconShoppingCart} className='shoppingCart_img' alt='Carro de compras'/>
            <p className='shoppingCart_contador'>1</p>
        </div>
    )
};

export default shoppingCart;