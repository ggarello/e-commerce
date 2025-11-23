import './shoppingCart.css'
import IconShoppingCart from '../../assets/icon_shoppingCart.png'
import { useContext, useState } from 'react';
import { CartContext } from './cartContex';
import { Link } from 'react-router-dom';

const shoppingCart = () => {

    const { totalDifferentItems } = useContext(CartContext);

    return(
        <Link to='./cart' className='cartWidget'>
            <div className='shoppingCart'>
                <img src={IconShoppingCart} className='shoppingCart_img' alt='Carro de compras'/>
                <p className='shoppingCart_contador'>{ totalDifferentItems() }</p>
            </div>
        </Link>
    )
};

export default shoppingCart;