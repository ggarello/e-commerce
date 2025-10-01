import logo from '../../assets/logo.png'
import ShoppingCart from '../shoppingCart/shoppingCart'
import'./navBar.css'

const NavBar = () => {

    return(
    <div className='navBarContainer'>
        <div className='logo'>
            <img src={logo} className='logo_img' alt='Gareza insumos'/>
        </div>
        <div id="navBar">
            <nav id = "navBar_nav">
                <p>Inicio</p>
                <p>Insumos</p>
                <p>Equipos</p>
                <p>Limpieza</p>
                <p>Contacto</p>
            </nav>
        </div>

        <ShoppingCart />

    </div>
    )
}

export default NavBar;