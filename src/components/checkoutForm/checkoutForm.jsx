import './checkoutForm.css'

const CheckoutForm = ( { dataForm, handleChangeInput, SendOrder } )   => {
    return(
        <form>
            <input type='text' name='fullname' value={dataForm.fullname} onChange={handleChangeInput}/>
            <input type='text' name='phone' value={dataForm.phone} onChange={handleChangeInput}/>
            <input type='text' name='email' value={dataForm.email} onChange={handleChangeInput}/>

            <button className='sendOrder' onClick={SendOrder}>Enviar orden</button>
        </form>
    )
}

export default CheckoutForm