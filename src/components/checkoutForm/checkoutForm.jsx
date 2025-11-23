import './checkoutForm.css'

const CheckoutForm = ({ dataForm, handleChangeInput, SendOrder }) => {
    return(
        <form className='checkoutForm'>

            <div className='formGroup'>
                <label className='formLabel'>Nombre y apellido</label>
                <input 
                    type='text' 
                    name='fullname' 
                    className='formInput'
                    value={dataForm.fullname} 
                    onChange={handleChangeInput}
                />
            </div>

            <div className='formGroup'>
                <label className='formLabel'>Nro de teléfono</label>
                <input 
                    type='text' 
                    name='phone'
                    className='formInput'
                    value={dataForm.phone} 
                    onChange={handleChangeInput}
                />
            </div>

            <div className='formGroup'>
                <label className='formLabel'>Email</label>
                <input 
                    type='text' 
                    name='email'
                    className='formInput'
                    value={dataForm.email} 
                    onChange={handleChangeInput}
                />
            </div>

            <button 
                className='sendOrder'
                onClick={SendOrder}
            >
                Enviar orden
            </button>

        </form>
    )
}

export default CheckoutForm
