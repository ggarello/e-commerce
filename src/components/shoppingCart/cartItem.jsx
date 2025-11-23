import './cartItem.css'

const CartItem = (cart, deleteProduct) => {

    return(
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
    )
}

export default CartItem