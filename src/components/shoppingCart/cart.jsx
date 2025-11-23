import './cart.css';
import { useContext } from 'react';
import { CartContext } from './cartContex';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';

const Cart = () => {

    const { cart, deleteProduct, deleteCart, totalPrice } = useContext(CartContext);

    return (
        <div className='cart'>

            <h2 className='cart_title'>Carrito</h2>

            {cart.length === 0 ? (
                <p className='cart_empty'>El carrito está vacío.</p>
            ) : (
                <>
                    
                    <Cartitem cart={cart} deleteProduct = {deleteProduct}/>

                    <div className='cart_footer'>
                        <h3>Total: ${totalPrice()}</h3>

                        <button 
                            className='cart_clear'
                            onClick={deleteCart}
                        >
                            Vaciar carrito
                        </button>
                    </div>
                    <div className='checkout'>
                        <Link to='/checkout'><button className='checkout_button'>Continuar con la compra</button></Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;