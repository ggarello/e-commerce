import './cart.css';
import { useContext } from 'react';
import { CartContext } from './cartContex';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, deleteProduct, deleteCart, totalPrice } = useContext(CartContext);

    return (
        <div className='cart'>

            <h2 className='cart_title'>Carrito</h2>

            {cart.length === 0 ? (
                <p className='cart_empty'>El carrito está vacío.</p>
            ) : (
                <>
                    <div className='cart_items'>
                        {cart.map(item => (
                            <div key={item.idProduct} className='cart_item'>
                                
                                <img 
                                    src={item.photo} 
                                    alt={item.title} 
                                    className='cart_item_img'
                                />

                                <div className='cart_item_info'>
                                    <p>{item.title }</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <p>Precio: ${item.price}</p>
                                    <p>Subtotal: ${item.price * item.cantidad}</p>
                                </div>

                                <button 
                                    className='cart_item_delete'
                                    onClick={() => deleteProduct(item.idProduct)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

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