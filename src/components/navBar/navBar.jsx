import logo from '../../assets/logo.png'
import ShoppingCart from '../shoppingCart/shoppingCart'
import { Link } from 'react-router-dom';    
import'./navBar.css'

const NavBar = () => {

    return(
    <div className='navBarContainer'>
        <div className='logo'>
            <Link to='/' className='link'><img src={logo} className='logo_img' alt='Gareza insumos'/></Link>
        </div>
        <div id="navBar">
            <nav id = "navBar_nav">
                <Link to='/' className='link'>Inicio</Link>
                <Link to='/category/insumos' className='link'>Insumos</Link>
                <Link to='/category/equipos' className='link'>Equipos</Link>
                <Link to='/category/limpieza' className='link'>Limpieza</Link>
                <Link to='/contacto' className='link'>Contacto</Link>
            </nav>
        </div>

        <ShoppingCart />

    </div>
    )
}

export default NavBar;