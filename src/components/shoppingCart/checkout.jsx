import './checkout.css'
import CheckoutForm from '../checkoutForm/checkoutForm.jsx'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from './cartContex'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../data/db.js'

const Checkout = () => {

    const { cart, totalPrice, } = useContext(CartContext)

    const [ orderId, setOrderId ] = useState(null)

    const [ dataForm, setDataForm ] = useState({
        fullname: "",
        phone: "",
        email: ""

    })

    const handleChangeInput = (event) =>{
        setDataForm({ ...dataForm, [ event.target.name ] :  event.target.value })
    }
    console.log(dataForm)

    const SendOrder = (event) => {
        event.preventDefault()

        const order = {
            t : new Date().toISOString(),
            buyer: { ... dataForm },
            products: [ ... cart ],
            totalPrice: totalPrice()
        }

        uploadOrder(order)

        console.log(order)
    }

    const uploadOrder = async(order) =>{
        try {
            const orderRef = collection(db, "orders")
            const response = await addDoc(orderRef, order)

            console.log(response.id)
            setOrderId(response.id)

        } catch (error) {
            console.log("Error al cargar la orden: ", error)
        }
    }

    return(
        <>

        <div>
            { 
            orderId ? (
                <div>
                    <h2>Orden generada con éxito!</h2>
                    <p>Guarde el id de compra: { orderId } </p>
                </div>
            ): (
                <CheckoutForm dataForm={dataForm} handleChangeInput={handleChangeInput} SendOrder={SendOrder} />
            )
            }
        </div>

        <Link to='/' className='link'>Volver atrás</Link>
        </>
    )
}

export default Checkout