import './contador.css'
import { useState } from "react"; //Hook para que los valores se vayan actualizando

const Contador = () => {

    //Los hooks se utilizan seguido, ya que se refrescan en la vista

    const [ contador, setContador ] = useState(1); // (1) significa que se inicializa en 1. Puede inicializarse simplemente el tipo de variable

    const aumentar = () => {
        setContador( contador + 1 ); // La función setContador var a dar a contador el nuevo valor que se le ponga entre paréntesis.
        console.log('Aumento: ', contador + 1 );
    }

    const reducir = () => {
        setContador( contador - 1 ) ;
        console.log('Redujo: ', contador + 1 );
    }

    return (
        <div className='div_contador'>
            <button onClick={reducir}>-</button>
            <p className='tag_contador'>Cantidad: {contador} </p>
            <button onClick={aumentar}>+</button>
        </div>
    )
}

export default Contador